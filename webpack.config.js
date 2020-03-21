const { join } = require("path");
const SizePlugin = require("size-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
    libraryTarget: "umd",
    library: "tailwindcss"
  },
  performance: {
    hints: false
  },
  resolve: {
    alias: {
      fs: join(__dirname, "fs.js")
    }
  },
  module: {
    rules: [
      {
        test: /preflight\.js$/,
        loader: join(__dirname, "loader.js")
      }
    ]
  },
  node: {
    fs: false
  },
  plugins: [new SizePlugin()]
};
