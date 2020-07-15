const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [new CompressionPlugin()],
  //Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        //only attempt to run babel on js files
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react", //take all jsx and turn it to normal js calls
            "stage-0", //handles some async code
            // Run all the different transorms rules needed to meet the requirements of last 2 versions of browsers
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
};
// babel-plugin-styled-components
