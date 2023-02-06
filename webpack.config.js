const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        clean: true
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js'],
        alias: {
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@images': path.resolve(__dirname, './public/assets/'),
            '@hooks': path.resolve(__dirname, './hooks/'),
            '@public': path.resolve(__dirname, './public/'),
            '@containers': path.resolve(__dirname, './src/containers/'),
            '@context': path.resolve(__dirname, './src/context/'),
            '@utils': path.resolve(__dirname, './src/utils/'),
            'database': path.resolve(__dirname, './src/database/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'public/[name].[hash][ext]'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public", "assets"),
                    to: "assets"
                }
            ]
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}
#
