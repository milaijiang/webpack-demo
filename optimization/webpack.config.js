const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /* 默认入口 */
    entry: path.resolve(__dirname, './src/singleEntry.js'),

    /* 多入口 */
    // entry: {
    //     entry1: path.resolve(__dirname, './src/entry1.js'),
    //     entry2: path.resolve(__dirname, './src/entry2.js'),
    // },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
        pathinfo: true,
    },
    optimization: {
        chunkIds: 'named',
        splitChunks: {
            cacheGroups: {
                lodash: {
                    name: 'chunk-lodash',
                    test: /[\\/]node_modules[\\/](lodash)/,
                    priority: -10,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -20,
                    chunks: 'all',
                    reuseExistingChunk: true,
                  },
          
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './templete/index.html' }),
    ]
}