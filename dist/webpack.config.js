'use strict';

var path = require('path');

var config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            use: 'babel-loader',
            test: /\.js$/
        }]
    }
};

module.exports = config;
//# sourceMappingURL=webpack.config.js.map