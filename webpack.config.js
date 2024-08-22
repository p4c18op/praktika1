const webpack = require('webpack');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,
        port: 3001,
        open: true,
    },
    output: {
        filename: 'test.js'
    },
    devtool: 'inline-source-map',
}