const path = require('path')
const merge = require("webpack-merge")
const baseConfig = require("./webpack.base.js")

const PATHS = {
  build: path.join(__dirname, "static"),
  ssrDemo: path.join(__dirname, "src", "ssr.js"),
}

module.exports = merge([
  {
    mode: "production",
    entry: {
      index: PATHS.ssrDemo,
    },
    output: {
      path: PATHS.build,
      filename: "[name].js",
      libraryTarget: "umd",
      globalObject: "this",
    },
  },
  baseConfig,
])