const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("./package.json");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://localhost:8081/",
    filename: "[name].bundle.js",
    clean: true,
  },
  devServer: {
    port: 8081,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Microfrontend1",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
    }),
    new ModuleFederationPlugin({
      name: "microfrontend1",
      filename: "microfrontend1.js",
      exposes: {
        "./Button": path.resolve(__dirname, "./src/components/Button.js"),
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
