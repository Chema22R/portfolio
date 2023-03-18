const common = require("./webpack.config.js");
const path = require('path');
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, 'dist')
    }
});