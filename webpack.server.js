const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");
const config = {
  //Inform webpack we are building a bundle for node.js
  //rather than for the browser
  target: "node",

  //Tell webpack the root file of our application
  entry: "./src/index.js",

  //Tell webpack where to put the output bundle file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
