import type { ColumnsType } from 'antd/es/table';

export interface TabItem {
    name: string
    value: string
    active?: boolean
}

export interface PageData {
    pageNum: number // 当前页码
    pageSize: number // 分页大小
    total: number // 数据总数
}

export interface TableData<T> {
    data: T[] // 表格数据，每个元素为一行数据
    columns: ColumnsType<T>[] // 表格列的配置信息
    page?: PageData // 分页数据，可选
    selection?: any[] // 已选中的行数据，可选
    height?: number | string // 表格高度，可选
}
