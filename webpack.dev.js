const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const { config } = require('webpack');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
        devMiddleware: {
            stats: {
                children: false,
                maxModules: 0,
            },
        },
    }
});