const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "host.js",
        remotes: {
          microfrontend1: `microfrontend1@http://localhost:8081/_next/static/${
            isServer ? "ssr" : "chunks"
          }/microfrontend1.js`,
        },
        shared: {},
      })
    );

    return config;
  },
};
