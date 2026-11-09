const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // Same file name the template references in <script defer src="script.js">
        filename: 'script.js',
        clean: true,
    },
    plugins: [
        // Copies src/index.html to dist/. The template already links
        // favicon.ico, style.css and script.js by name, so nothing is injected.
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
