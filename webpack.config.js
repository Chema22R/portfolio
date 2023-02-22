/* eslint-env node */
/* eslint-disable jest/require-hook */
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


const data = {};

Object.keys(data).forEach((key) => {
    data[key] = process.env[key] || data[key];
});


module.exports = {
    target: 'web',
    entry: './src/index.jsx',
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/u,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { postcssOptions: { plugins: [autoprefixer()] } }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/u,
                exclude: /node_modules/u,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html'
        }),
        new webpack.DefinePlugin(data)
    ]
};