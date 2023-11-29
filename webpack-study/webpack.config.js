const FilePlugins = require("./plugins/filePlugins");
module.exports = function (env) {
  return {
    mode: "development",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["./loaders/style-loaders"],
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
    plugins: [new FilePlugins("文件列表")],
  };
};
