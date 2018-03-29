const path = require('path');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    output: {
        filename: 'index.js',
        publicPath: '/js/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: ['babel-loader']
            }
        ]
    }
};

