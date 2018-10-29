
module.exports = {
    mode: 'development',
    entry: './src/app/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './src',
        port: 9000
    }
}