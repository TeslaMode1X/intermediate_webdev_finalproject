const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// src/index.html loads src/script.js directly during development.
// In dist/ the page must load the bundle instead, so point it at main.js.
const template = fs
    .readFileSync(path.resolve(__dirname, 'src/index.html'), 'utf8')
    .replace('src="script.js"', 'src="main.js"');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: template,
            favicon: './src/favicon.ico',
            inject: false,
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/style.css', to: 'style.css' }],
        }),
    ],
    devServer: {
        static: './dist',
    },
};
