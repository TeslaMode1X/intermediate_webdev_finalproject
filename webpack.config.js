const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // Bundle name referenced by the template: <script defer src="main.js">
        filename: 'main.js',
        clean: true,
    },
    plugins: [
        // Copies src/index.html to dist/. The template already links
        // favicon.ico, style.css and main.js by name, so nothing is injected.
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico',
            inject: false,
        }),
        // style.css is a plain stylesheet referenced from the HTML <link>,
        // so it is copied as-is next to index.html.
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/style.css', to: 'style.css' }],
        }),
    ],
    devServer: {
        static: './dist',
    },
};
