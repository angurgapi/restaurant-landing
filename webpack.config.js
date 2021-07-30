const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = (env, options) => {
    const PATHS = {
        src: path.join(__dirname, './src'),
        dist: path.join(__dirname, './dist'),
    };
    const PAGES = `${PATHS.src}/pug/pages/`;
    
    return {
        mode: 'development',
        devServer: {
            // historyApiFallback: true,
            // contentBase: path.resolve(__dirname, './dist'),
            // open: true,
            // compress: true,
            // hot: true,
            port: 8080,
        },
        entry: {
            main: `${PATHS.src}/index.js`,    
        },
        output: {
            filename: '[name].[hash].js',
            path: PATHS.dist,
        
        },

        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jQuery',
            }),
            new HtmlWebpackPlugin({
            title: 'Main',
            template: `${PAGES}/index.pug`
            }),
            new MiniCssExtractPlugin()
        ],
        resolve: {
            extensions: ['.js', '.scss'],            
        },
        module: {
            rules: [            
                {
                    test: /\.(png|jpg|svg|gif|webp)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.(ttf|woff|woff2|eot)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: './fonts/[name].[ext]'                            
                        }
                    }                

                },
                {
                    test: /\.pug$/,
                    use: ['pug-loader']
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader,
                        options: {

                        }},
                        {loader: 'css-loader'},
                        {loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        // {loader: 'sass-resources-loader'}                        
                    
                    ],
                }
            ]
        }
    }
}
