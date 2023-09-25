import React, {useEffect, useState} from "react";
import userApi from "../../api/user-api";
import {PageData, TableData} from "../../model/Base";
import UserCondition from "../../model/condition/UserCondition";
import User from "../../model/po/User";
import {Button, Form, Input, Table} from "antd";
import {data} from "browserslist";

const Home: React.FC = () => {

    useEffect(() => {
        console.log('init......')
        getUserList()
        return () => {
            console.log('destroy......')
        }
    }, [])

    const [page, setPage] = useState<PageData>({
        pageNum: 1,
        pageSize: 1,
        total: 0,
        loading: false
    })

    const [condition, setCondition] = useState<UserCondition>(new UserCondition())

    const [tableData, setTableData] = useState<TableData<User>>({
        columns: [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '名称',
                dataIndex: 'nickName',
                key: 'nickName'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            }
        ],
        data: []
    })

    const getUserList = (): void => {
        page.loading = true
        setPage({...page})
        condition.pageNum = page.pageNum
        condition.pageSize = page.pageSize
        setTimeout(() => {
            userApi.getUserPageList(condition).then(res => {
                if (res.status) {
                    setTableData(prev => ({
                        ...prev,
                        data: res.data!.list
                    }))
                    setPage(prev => ({
                        ...prev,
                        total: res.data!.totalRecord,
                        loading: false
                    }))
                }
            }).catch(err => {
                setPage(prev => ({
                    ...prev,
                    loading: false
                }))
                console.log('err ', err)
            })
        }, 200)
    }

    const onChangePage = (current: number): void => {
        console.log('page ', current)
        page.pageNum = current
        setPage({...page})
        getUserList()
    }

    const onSearch = () => {
        page.pageNum = 1
        setPage({...page})
        getUserList()
    }

    const onFinish = (val: UserCondition) => {
        condition.nickName = val.nickName
        condition.userName = val.userName
        setCondition({...condition})
        onSearch()
    }

    const [form] = Form.useForm();
    return (
        <div className={'home'}>
            <div className={'page-search'}>
                <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                    <Form.Item
                        name="userName"
                        label="用户名："
                    >

                        <Input  placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="nickName"
                        label={'昵称：'}
                    >
                        <Input
                            placeholder="昵称"
                        />
                    </Form.Item>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                检索
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </div>
            <div className={'container'}>
                <h3 className={'center '}>Home页面</h3>
                <Table columns={tableData.columns}
                       dataSource={tableData.data}
                       rowKey={'id'}
                       pagination={{
                           defaultPageSize: page.pageSize,
                           current: page.pageNum,
                           total: page.total,
                           onChange: onChangePage,
                           size: 'default'
                       }}
                       loading={page.loading}
                />
            </div>
        </div>
    );
}

export default Home
