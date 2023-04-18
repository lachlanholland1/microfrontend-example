const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://localhost:8080/",
    filename: "[name].bundle.js",
    clean: true,
  },
  devServer: {
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Host",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
    }),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        microfrontend1:
          "microfrontend1@http://localhost:8081/microfrontend1.js",
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
};
