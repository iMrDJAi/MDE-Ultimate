const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require('autoprefixer')
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
    mode: 'production',
    entry: {
        bundle: './src/bundle.js',
        demo: './src/demo.js'
    },
    output: {
        filename: '[name].js'
    },
    optimization: {
        minimizer: [
          new OptimizeCssAssetsPlugin(),
          new TerserPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new HtmlWebpackPlugin({ template: "./src/demo.html" }),
        new CleanWebpackPlugin()
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
                    MiniCssExtractPlugin.loader, //2. Extract css into files
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
    }
}