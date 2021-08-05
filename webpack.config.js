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
    const production = options.mode === 'production';
    const publicDir = production ? 'https://angurgapi.github.io/restaurant-landing/' : '/';
    
    return {       
        // devtool: production ? false : 'eval-sourcemap',
        devServer: {
            historyApiFallback: true,
        },
        entry: {
            main: `${PATHS.src}/index.js`,    
        },
        output: {
            filename: '[name].[hash].js',
            path: PATHS.dist,
            publicPath: publicDir,
        
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
                    test: /\.(png|jpg|jpeg|svg|gif|webp)$/i,
                    use: [
                        {
                          loader: 'file-loader',
                          options: {
                            name: 'img/[name].[ext]',
                            publicPath: '../',
                            exclude: ['src/fonts/'],
                            sourceMap: true,
                          },
                        },
                       
                      ],
                                   
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
                    use:
                    {loader: 'pug-loader',
                        options: {
                                sourceMap: true
                            }
                    },
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader,
                        options: {

                        }},
                        {loader: 'css-loader'},
                        {loader: 'sass-loader',
                            // options: {
                            //     sourceMap: true
                            // }
                        },
                        // {loader: 'sass-resources-loader'}                        
                    
                    ],
                }
            ]
        }
    }
}
