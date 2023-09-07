class HttpResult<T> {
    code?: number

    message?: string

    data?: T
}

export default HttpResult
