// @ts-check
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

/** @type {import("webpack").Configuration} */
const webpackConfig = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: { path: require.resolve("path-browserify") },
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
};

module.exports = webpackConfig;
