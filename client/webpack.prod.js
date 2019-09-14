const common = require("./webpack.config.js");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            DATA_URL: JSON.stringify(process.env.DATA_URL || "https://api.github.com/gists/09a7621fddbd018bc830fb3f5cd1fadb")
        })
    ]
});