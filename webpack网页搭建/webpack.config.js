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
  ],
  module: {
    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],//从右往左使用，不能颠倒顺序 css- 执行将css插入到js style-执行将css绑定到dom树上
    }, {
      test: /\.less$/i,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.jpg|png|gif|jpeg/,
      type: 'asset'//webpack会把文件当成静态资源处理打包
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      type: 'asset/resource',//所有的字体图标文件都输出到dist下面
      generator: {//生成文件的名字定义规则
        filename: 'font/[name].[hash:6][ext]'
      }    
      }, {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets:['@babel/preset-env']
        }
      }
      }
      
    ],
  },
  devServer: {
    port:3000
  }
}