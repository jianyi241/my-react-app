import instance from './interceptors'
import { AxiosRequest, CustomResponse } from './interface'

class Request {

    // baseURL
    protected baseURL: string = process.env.REACT_APP_BASE_API!.toString()

    // 自定义表头
    protected headers: object = {
        ContentType: 'application/json;charset-UTF-8'
    }

    private apiAxios<T>({
        baseURL = this.baseURL,
        headers = this.headers,
        method,
        url,
        data,
        params,
        responseType
    }: AxiosRequest): Promise<CustomResponse<T>> {
        // url解析
        // const _url = url.split('.')
        // url = getUrl(_url[0], _url[1])

        return new Promise((resolve, reject) => {
            instance({
                baseURL,
                headers,
                method,
                url,
                params,
                data,
                responseType
            })
                .then((res) => {
                    console.log('apiAxios res ', res)
                    // 200:服务端业务处理正常结束
                    if (res.status !== 200) {
                        resolve({
                            status: false,
                            message: res.data?.message || `${url} failed`,
                            data: undefined
                        })
                        return
                    }
                    if (res.data.code === 200) {
                        resolve({
                            status: true,
                            message: 'success',
                            data: res.data?.data,
                            origin: res.data
                        })
                    } else {
                        alert(res.data?.message || `${url} failed`)
                        resolve({
                            status: false,
                            message: res.data?.message || `${url} failed`,
                            data: res.data?.data,
                            origin: res.data
                        })
                    }
                })
                .catch((err) => {
                    const messageText =
                        err?.data?.message || err?.message || `${url} failed`
                    alert(messageText)
                    reject(err)
                })
        })
    }

    protected get<T>({
        baseURL,
        url,
        params,
        data,
        headers,
        responseType
    }: AxiosRequest): Promise<CustomResponse<T>> {
        return this.apiAxios<T>({
            baseURL,
            headers,
            method: 'GET',
            url,
            data,
            params,
            responseType
        })
    }

    protected post<T>({
        baseURL,
        url,
        params,
        data,
        headers,
        responseType
    }: AxiosRequest): Promise<CustomResponse<T>> {
        return this.apiAxios<T>({
            baseURL,
            headers,
            method: 'POST',
            url,
            data,
            params,
            responseType
        })
    }

    protected put<T>({
        baseURL,
        url,
        params,
        data,
        headers,
        responseType
    }: AxiosRequest): Promise<CustomResponse<T>> {
        return this.apiAxios<T>({
            baseURL,
            headers,
            method: 'PUT',
            url,
            data,
            params,
            responseType
        })
    }

    protected delete<T>({
        baseURL,
        url,
        params,
        data,
        headers,
        responseType
    }: AxiosRequest): Promise<CustomResponse<T>> {
        return this.apiAxios<T>({
            baseURL,
            headers,
            method: 'DELETE',
            url,
            data,
            params,
            responseType
        })
    }
}

export default Request
