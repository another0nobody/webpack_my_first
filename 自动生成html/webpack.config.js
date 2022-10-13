const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename:'bundel.js'
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./public/index.html'//生成html文件的模板
    })
  ]
}