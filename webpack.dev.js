const HtmlWebpackPlugin = require("html-webpack-plugin")
const autoprefixer = require('autoprefixer')
module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/bundle.js',
        demo: './src/demo.js'
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/demo.html" })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //2. Inject styles into DOM
                    "css-loader", //1. Turns css into commonjs
                    { 
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    { 
                        loader: 'sass-loader',
                        options: {
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['node_modules'],
                            }
                        }
                    }
                ]
            }
      ]
    },
    devServer: {
        historyApiFallback: true,
        port: 81
    }
}