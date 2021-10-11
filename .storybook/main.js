const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/*.stories.tsx"],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            esModule: true,
            modules: true,
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
