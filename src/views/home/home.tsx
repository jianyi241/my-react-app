import React, { useEffect, useState} from "react";
import userApi from "../../api/user-api";
import {PageData, TableData} from "../../model/Base";
import UserCondition from "../../model/condition/UserCondition";
import User from "../../model/po/User";
import {Table} from "antd";

function Home() {

    useEffect(() => {
        console.log('init......')
        getUserList()
        return () => {
            console.log('destroy......')
        }
    }, [])


    const [page,setPage] = useState<PageData>({
        pageNum: 1,
        pageSize: 10,
        total: 0
    })

    const [condition, setCondition] = useState<UserCondition>(new UserCondition())

    const [tableData, setTableData] = useState<TableData<User>>({
        columns: [
            // {
            //     title: 'ID',
            //     dataIndex: 'id',
            // },
            // {
            //     title: '名称',
            //     dataIndex: 'name',
            // },
            // {
            //     title: 'Address',
            //     dataIndex: 'address',
            // }
        ],
        data: []
    })

    const getUserList = (): void => {
        condition.pageNum = page.pageNum
        condition.pageSize = page.pageSize
        userApi.getUserPageList(condition).then(res => {
            if (res.status) {
                console.log('success ', res.data)
                tableData.data = res.data!.list
                page.total = res.data!.totalRecord
                setTableData({...tableData})
                setPage({...page})

            }
        })
    }

    return (
        <div className="home">
            <div className="container">
                <h3 className="center"> Home页面</h3>
                {/*<Table columns={tableData.columns} dataSource={tableData.data} />*/}
            </div>
        </div>
    );
}

export default Home
