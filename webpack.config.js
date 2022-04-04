const path = require('path');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    //plugins: [new MiniCssExtractPlugin({})],

    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    //MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },

        ],
    }



};