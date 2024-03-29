const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    lodash: ['lodash']
  },
  output: {
    filename: '[name]-dll.js',
    path: path.resolve(__dirname, 'dll'),
    // 存放动态链接库的全局变量名，加上_dll_防止全局变量冲突
    library: '[name]'
  },
  // 动态链接库的全局变量名称，需要可output.library中保持一致，也是输出的manifest.json文件中name的字段值
  // 如react.manifest.json字段中存在"name":"_dll_react"
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, 'dll', '[name].manifest.json')
    })
  ]
}
