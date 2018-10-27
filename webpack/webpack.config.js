const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            
        })
    ],

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', //Adiciona CSS no DOM injetando a tag <style>
                'css-loader' // interpreta @imports, url(), ...                
            ]
        }]
    }
}