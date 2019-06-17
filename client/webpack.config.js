const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: "./src/assets/favicons", to: "favicons"},
            {from: "./src/assets/icons", to: "icons"},
            {from: "./src/assets/images", to: "images"},
            {from: "./src/index.html", to: "index.html"}
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};