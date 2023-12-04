/*
 * @Author: 冷 晓飞 2102819372@qq.com
 * @Date: 2023-12-04 00:59:47
 * @LastEditors: 冷 晓飞 2102819372@qq.com
 * @LastEditTime: 2023-12-04 03:29:21
 * @FilePath: /2102819372/webpack-study/webpack.config.js
 * @Description: webpack基础配置
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { templateContent } = require("./template");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const FilePlugins = require("./plugins/filePlugins");
module.exports = function (env) {
  // console.log(CopyPlugin);
  return {
    mode: "development",
    devtool: "source-map",
    entry: {
      index: "./src/index.js",
      a: "./src/a.js",
    },
    output: {
      filename: "[name].[chunkhash:5].js",
      path: path.resolve(__dirname, "./dist"),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["css-loader"],
        },
        {
          test: /\.(png)|(jpg)|(gif)$/,
          use: [
            {
              loader: "./loaders/img-loader.js",
              options: {
                limit: 3000, //3000字节以上使用图片 3000字节以内使用base64
                filename: "img-[contenthash:5].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new FilePlugins("文件列表"),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        // templateContent: ({ htmlWebpackPlugin }) =>
        //   templateContent(htmlWebpackPlugin), // 方法3 使用 templateContent 属性自己写
        chunks: ["index"],
        // filename: "index.html",
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "./public",
            to: "./",
            noErrorOnMissing: true, // 忽略不存在的文件
            globOptions: {
              ignore: ["**/index.html"],
            },
          },
        ],
      }),
    ],
    devServer: {
      port: 8080,
      open: true,
      hot: true,
    },
  };
};
