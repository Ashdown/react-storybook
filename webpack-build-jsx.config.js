const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [path.resolve(__dirname, './src/index.jsx')],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.jsx']
    }
};