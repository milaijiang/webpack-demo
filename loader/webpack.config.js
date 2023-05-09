const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/singleEntry.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'singleEntry.bundle.js',
    },

    module: {
        rules: [
            /* 基础用法 */
            // { test: /\.css$/, use: 'css-loader' },

            /* 使用多个loader处理同种类型文件 */
            {
                test: /\.css$/, use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },

            // {
            //     test: /\.less$/, use: [
            //         { loader: 'style-loader' },
            //         { loader: 'css-loader' },
            //         { loader: 'less-loader' },
            //     ]
            // },

            /* loader执行顺序 */
            // {
            //     test: /\.js$/, use: [
            //         { loader: path.resolve(__dirname, './customLoader/loader1.js') },
            //         { loader: path.resolve(__dirname, './customLoader/loader2.js') },
            //         { loader: path.resolve(__dirname, './customLoader/loader3.js') },
            //     ]
            // },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        // useBuiltIns: false,

                                        useBuiltIns: 'entry',
                                        corejs: '3',

                                        // useBuiltIns: 'usage',
                                        // corejs: { version: '3.13.0', proposals: true },
                                        targets: {
                                            chrome: '60'
                                        },
                                    }
                                ]
                            ],
                        }
                    },
                ],
            },
        ]
    },
}