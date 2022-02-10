const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let mode = "development"
if (process.NODE_ENV==="production") {
  mode = "production"
}

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" } 
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".js", ".jsx"]
  },

  devServer: {
    static: "./dist",
    hot: true
  },
  devtool: "source-map"
}