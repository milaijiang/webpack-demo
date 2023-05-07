const path = require('path');
const webpack = require('webpack');

const StartOnBuildWebpackPlugin = require('./customPlugin/StartOnBuildWebpackPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, './src/singleEntry.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'singleEntry.[contenthash:8].bundle.js',
        clean: true,
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
    },

    plugins: [
        /* 自定义插件  */
        new StartOnBuildWebpackPlugin(),
        
        /* 自动生成html插件 */
        new HtmlWebpackPlugin({ template: './templete/index.html' }),

        new ProgressBarPlugin(),

        new MiniCssExtractPlugin(),

        new webpack.DefinePlugin({
            FLAG: JSON.stringify('dev'),
        }),

        new webpack.DllReferencePlugin({
            manifest: require('./dll/lodash.manifest.json'),
        }),
    ]
}