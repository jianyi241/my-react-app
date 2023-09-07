import Request from "./request/request";
import {CustomResponse} from "./request/interface";
import AuthorizeInfo from "../model/po/AuthorizeInfo";
import {user} from "./request/url-dict";
import PageResult from "../model/PageResult";
import User from "../model/po/User";
import UserCondition from "../model/condition/UserCondition";

class UserApi extends Request{
    /**
     *
     * @param userName
     * @param password
     */
    loginIn({
                userName,
                password
            }: any): Promise<CustomResponse<AuthorizeInfo>> {
        const data = new FormData()
        data.append('userName', userName)
        data.append('password', password)
        return this.post<AuthorizeInfo>({ url: user.login, data: data })
    }

    getUserPageList(condition: UserCondition): Promise<CustomResponse<PageResult<User>>> {
        return this.get<PageResult<User>>({ url: user.pageList, params: condition })
    }
}

// 单列模式返回对象
let instance: UserApi | undefined
export default (() => {
    if (instance) {
        return instance
    }
    instance = new UserApi()
    return instance
})()
