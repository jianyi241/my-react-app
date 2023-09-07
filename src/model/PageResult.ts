interface PageResult<T> {
    list: T[]
    pageNum: number
    pageSize: number
    totalPage: number
    totalRecord: number
}

export default PageResult
