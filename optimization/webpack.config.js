const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /* 默认入口 */
    mode: 'development',
    entry: path.resolve(__dirname, './src/singleEntry.js'),

    /* 多入口 */
    // entry: {
    //     entry1: path.resolve(__dirname, './src/entry1.js'),
    //     entry2: path.resolve(__dirname, './src/entry2.js'),
    // },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunkBundle.js',
        clean: true,
        // pathinfo: true,
    },
    optimization: {
        /* 指定 webpack 生成 chunk id 时的算法 */
        // chunkIds: 'natural',
        chunkIds: 'named',
        // chunkIds: 'deterministic',

        /* 指定 webpack 生成模块 id 的时候使用什么算法 */
        // moduleIds: 'natural',
        // moduleIds: 'named',
        // moduleIds: 'deterministic',

        splitChunks: {
            /* 优化模式 默认async */
            // chunks: 'async',  // 只对异步文件作处理
            // chunks: 'initial',  // 只对入口文件进行拆分，不去处理异步文件里的模块
            chunks: 'all',  // 拆分同步和异步文件
            // chunks: (chunk) => {  // 函数方式，可自行定义分离规则
            //     console.log(chunk.name);
            //     return true;
            // },

            /*
            * 控制最小包的大小，大于这个值才会去拆分，
            * 如果拆分的公共模块小于这个大小，那就复制成多份，直接打包到引用该模块的包里
            */
            // minSize: 0,

            /*
            * 模块的重复调用次数大于等于minChunks值时，就会满足这项拆包条件，
            * 但只看入口模块导入的，不看动态加载模块中导入的(import(‘…’))，即使设置的chunks为“all”。
            */
            // minChunks: 1,
            
            // cacheGroups: {
            //     lodash: {
            //         name: 'chunk-lodash',
            //         test: /[\\/]node_modules[\\/](lodash)/,
            //         priority: -10,
            //         chunks: 'all',
            //     },
            //     vendors: {
            //         name: 'chunk-vendors',
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -20,
            //         chunks: 'all',
            //       },
          
            // },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './templete/index.html' }),
    ]
}