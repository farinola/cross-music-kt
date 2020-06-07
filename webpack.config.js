const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/main/resources/static/index.ts',
    mode: process.env.development ? 'development' : 'production',
    devtool: process.env.development ? "inline-source-map" : false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.css' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/main/resources/static/dist'),
    },
};
