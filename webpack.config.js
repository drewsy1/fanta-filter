/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/ts/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        libraryTarget: 'umd',
        library: 'FantaFilter',
        umdNamedDefine: true,
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
    },
    devtool: 'source-map',
    stats: {
        colors: true,
    },
};
