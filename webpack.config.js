const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: "localhost", // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下： 所有的都能访问 通过ip或者通过localhost
    compress: true,  // 启用gzip压缩一切服务
    port: 8080,
    hot: true,      //  启动热更新模块 或者在命令行中带参数开启
    overlay: {      //  在编译的时候出现任何错误 就会在网页上面显示黑色的背景和错误的信息
      warnings: false, // 警告信息一般不开启
        errors: true    // 错误信息
    }
  },
  module : {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root:     __dirname,
      verbose:  true,
      dry:      false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
};
