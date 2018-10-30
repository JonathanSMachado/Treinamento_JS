const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const public = '/public'
const path = __dirname + public

module.exports = {
    mode: 'production',
    entry: {
        init: './src/init.js'
    },
    output: {
        filename: '[name].min.js',
        path: path
    },

    devServer: {
        contentBase: `.${public}`,
        port: 9000
    },

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.min.css',
            // chunkFilename: 'assets/css/[name].css'
        }),

        // index.html
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),

        // cursos.html
        new HtmlPlugin({
            filename: 'pages/cursos.html',
            template: './src/pages/cursos.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),

        // inicio.html
        new HtmlPlugin({
            filename: 'pages/inicio.html',
            template: './src/pages/inicio.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),

        // sobre.html
        new HtmlPlugin({
            filename: 'pages/sobre.html',
            template: './src/pages/sobre.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),

        // suporte.html
        new HtmlPlugin({
            filename: 'pages/suporte.html',
            template: './src/pages/suporte.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
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