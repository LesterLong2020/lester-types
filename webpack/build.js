
/**
 * @name build
 * @author Lester
 * @date 2021-05-06 17:15
 */

const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // css压缩
const TerserWebpackPlugin = require('terser-webpack-plugin'); // js压缩
const config = require('./config');

module.exports = function (env, argv) {
    return merge(config(env, argv), {
        devtool: 'source-map',
        plugins: [
            new CleanWebpackPlugin(),
        ],
        optimization: {
            splitChunks: {
                chunks: 'async',   // initial、async和all
                minSize: 30000,   // 形成一个新代码块最小的体积
                automaticNameDelimiter: '-',   // 打包分割符
                name: 'name',
                cacheGroups: {
                    commons: {
                        name: 'vendor',
                        chunks: 'initial',
                        minChunks: 2,
                    },
                },
            },
            minimizer: [
                new TerserWebpackPlugin({
                    parallel: true,
                    terserOptions: {
                        output: {
                            comments: false,
                            ascii_only: true,
                        },
                        compress: {
                            drop_console: false,
                            drop_debugger: true,
                            comparisons: false,
                        },
                        safari10: true,
                    },
                }),
                new OptimizeCSSAssetsPlugin({}),
            ]
        }
    })
}