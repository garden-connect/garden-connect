const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('/apis', {
        logLevel: 'debug',
        target: 'http://147.182.231.74:8080',
        changeOrigin: true,
        secure: true,
    }));
};