const path = require('path');

module.exports = {
    // 默认入口
    entry: path.resolve(__dirname, './src/singleEntry.js')

    // 多入口
    // entry: {
    //     entry1: path.resolve(__dirname, './src/entry1.js'),
    //     entry2: path.resolve(__dirname, './src/entry2.js'),
    // }
}