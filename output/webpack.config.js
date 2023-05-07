const path = require('path');

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

        /* 单入口出口文件名配置 */
        filename: 'singleEntry.bundle.js',

        /* hash */
        // filename: 'singleEntry.[contenthash:8].bundle.js',

        
        /* 多入口出口文件名配置 */
        // filename: '[name].bundle.js',

        /* 运行时加载的文件名配置 */
        // chunkFilename: '[name].chunckBundle.js',

        /* assets module输出文件名配置 */
        // assetModuleFilename: '[hash:8][ext][query]'

        /* 是否输出注释 */
        // pathinfo: true,
    },

    // module: {
    //     rules: [
    //       {
    //         test: /\.png/,
    //         type: 'asset/resource'
    //       }
    //     ]
    // },
}