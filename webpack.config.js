const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    fallback: {
      "zlib-sync": false,
      "utf-8-validate": false,
      bufferutil: false,
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: false,
  },
  node: {
    __dirname: false,
    __filename: false,
  },
};
