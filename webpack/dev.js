/**
 * @name dev
 * @author Lester
 * @date 2021-05-06 14:56
 */

const { merge } = require('webpack-merge');
const config = require('./config');

module.exports = function (env, argv) {
    return merge(config(env, argv), {
        devtool: 'inline-source-map',
        target: 'web',
        devServer: {
            host: 'localhost',
            port: 8000,
            open: true,
            hot: true,
            historyApiFallback: true,
            disableHostCheck: true, // 防止Invalid Host header的报错
            overlay: {
                errors: true,
                warnings: true,
            },
            proxy: [
                {
                    context: ['/api'],
                    target: process.env.API_HOST,
                    secure: false,
                    changeOrigin: true,
                },
            ],
        },
    })
}