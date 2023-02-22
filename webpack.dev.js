/* eslint-env node */
/* eslint-disable jest/require-hook */
const common = require('./webpack.config.js');
const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');


const data = {};

Object.keys(data).forEach((key) => {
    data[key] = process.env[key] || data[key];
});


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, 'dist')
    },
    plugins: [
        new ESLintPlugin(),
        new StylelintPlugin({ context: './src' }),
        new webpack.DefinePlugin(data)
    ]
});