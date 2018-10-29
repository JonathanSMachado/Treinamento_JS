const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    entry: './src/init.js',
    output: {
        filename: 'navigate.min.js',
        path: __dirname + '/public'
    },

    devServer: {
        contentBase: './public',
        port: 9000
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],

    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', //Adiciona CSS no DOM injetando a tag <style>
                'css-loader', // interpreta @imports, url(), ...               
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}