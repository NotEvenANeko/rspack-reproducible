/**
 * @type {import('@rspack/cli').Configuration}
 */
export default {
  entry: "./index.js",

  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        type: "javascript/esm",
      },
    ],
  },
};
