const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs')

const path = __dirname + '/public'

// função que retorna os arquivos de um diretório
function loadFiles(path) {
    const folder = __dirname + path
    const readPages = fs.readdirSync(folder)
    return readPages   
}

// configura o carregamento dinâmico das páginas
let loadHtmlFiles = loadFiles('/src/pages').map(file => {
    return  new HtmlPlugin({
        filename: `pages/${file}`,
        template: `./src/pages/${file}`,
        minify: {
            collapseWhitespace: true,
            removeComments: true
        },
        cache: true
    })
})

module.exports = {
    mode: 'production',
    entry: {
        navigate: './src/init.js'
    },
    output: {
        filename: 'assets/js/[name].min.js',
        path: path
    },

    devServer: {
        contentBase: './public',
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
        new CleanWebpackPlugin(['public']), //limpa diretório antes de buildar novamente
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.min.css',
        }),

        // carrega o index.html
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            cache: true
        }),
    ].concat(loadHtmlFiles), //para carregar as demais páginas dinamicamente

    module: {
        rules: [{
            // load style files
            test: /\.s?[ac]ss$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
            // load images files
            test: /\.(png|svg|jpg|gif)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
                options: {
                    cacheDirectory: true,
                    name: '[name].[ext]',
                    outputPath: 'assets/images/'
                }
            }]
        }]
    }
}