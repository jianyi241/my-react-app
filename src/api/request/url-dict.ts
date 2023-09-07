// interface UrlDict {
//     [key: string]: {
//         [key: string]: string
//     }
// }
export const user = {
    login: '/user/login',
    loginOut: '/user/login-out',
    pageList: '/user/getUserList'
}
const urlDict = {
    user
}

export default urlDict

// export const getUrl = (biz: string, UrlName: string): string => {
//     try {
//         const bizKeys = Object.keys(urlDict)
//         if (bizKeys.indexOf(biz) < 0) {
//             throw new Error('biz not in Dict')
//         }
//         let hostname = urlDict[biz][UrlName]
//         if (!hostname) {
//             throw new Error('url not in Dict')
//         }
//         // if (hostname.substr(0, 1) === '/') {
//         //     hostname = hostname.substr(1);
//         // }
//         return hostname
//     } catch (err) {
//         console.error(err)
//         return ''
//     }
// }
