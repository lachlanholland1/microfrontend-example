const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: "microfrontend1",
        filename: "static/chunks/microfrontend1.js",
        exposes: {
          "./Button": path.resolve(__dirname, "./src/components/Button.js"),
        },
        shared: {},
      })
    );

    return config;
  },
};
