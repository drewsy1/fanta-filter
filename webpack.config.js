/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/ts/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /(node_modules|bower_components)/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            Interfaces: path.resolve(__dirname, 'src/ts/lib/interfaces/index.ts'),
            Util: path.resolve(__dirname, 'src/ts/lib/util/index.ts'),
        },
    },
    devtool: 'inline-source-map',
    stats: {
        colors: true,
    },
};
