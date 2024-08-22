const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const { config } = require('webpack');

module.exports = merge(config, {
    mode: 'production',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: false,
        port: 3001,
        open: false,
    },
    output: {
        filename: 'test.js'
    },
    devtool: 'inline-source-map',
}
);