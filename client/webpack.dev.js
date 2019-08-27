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
            PROJECTS_URL: JSON.stringify(process.env.PROJECTS_URL || "http://localhost/<projectName>")
        })
    ]
});