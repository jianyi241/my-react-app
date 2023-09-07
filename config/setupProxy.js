const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use([process.env.REACT_APP_BASE_API], createProxyMiddleware({
        target: process.env.REACT_APP_SERVER, // 后台服务器地址
        changeOrigin: true,
        pathRewrite: {
            ['^' + process.env.REACT_APP_BASE_API]: '',
        },
    }))
}
