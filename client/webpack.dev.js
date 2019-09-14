const common = require("./webpack.config.js");
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new webpack.DefinePlugin({
            DATA_URL: JSON.stringify(process.env.DATA_URL || "https://api.github.com/gists/09a7621fddbd018bc830fb3f5cd1fadb")
        })
    ]
});