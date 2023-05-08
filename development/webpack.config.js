const path = require('path');

module.exports = {
    mode: 'development',

    entry: path.resolve(__dirname, './src/singleEntry.js'),

    devtool: 'source-map',

    /* 打入到bundle的source map */
    // devtool: 'inline-source-map',

    /* 隐藏source map */
    // devtool: 'hidden-source-map',

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000
    }
}