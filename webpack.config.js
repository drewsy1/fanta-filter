/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const {version} = require('./package.json');
const circular = require('circular-dependency-plugin');

module.exports = {
    mode: "development",
    entry: './src/js/fanta-filter',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].js',
        library: "fanta-filter",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'fantafilter-util': path.resolve(__dirname, 'src/js/util')
        }
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [new TerserPlugin({})],
    },
    plugins: [
        new circular(),
        new webpack.DefinePlugin({
            BUNDLED: true,
            VERSION: `'${version}'`
        }),
    ],
    stats: {
        colors: true
    }
};