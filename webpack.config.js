const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: '[name].build.js',
        path: path.join(__dirname, '/dist'),
        chunkFilename: '[name].bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/ , loader:'babel-loader', exclude: '/node_modules/'},
            //{test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'}
        ]
    },
    plugins: [
        new HWP(
            {template: path.join(__dirname, '/src/index.html')}
        )
    ]
}