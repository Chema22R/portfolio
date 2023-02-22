/* eslint-env node */
/* eslint-disable jest/require-hook */
const common = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');


const data = {};

Object.keys(data).forEach((key) => {
    data[key] = process.env[key] || data[key];
});


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin(data)
    ]
});