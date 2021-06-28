const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode_env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode:mode_env,
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'main.[hash].js'
    },
    devtool:(mode_env === 'development') ? 'source-map':false,
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true,
        historyApiFallback: true,
    },
    module:{
        rules:[{
                test:/\.m?js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                }
            },
            {
            test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
            use:{
                    loader: 'url-loader',
                    options: {
                        // limit: 25000,
                    },
                },
            
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./base.html'
        }),
        new CleanWebpackPlugin()
    ]
}