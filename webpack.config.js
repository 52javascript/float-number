const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        app: path.join(__dirname, './src')
    },
    output: {
        filename: 'float-number.min.js',
        path: path.join(__dirname, './dist'),
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, '../../src')
            },
        ]
    },
    plugins: [

    ]
}