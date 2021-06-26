const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode_env = process.env.Node_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode:mode_env,
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'main.[hash].js'
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true,
    },
    devtool:(mode_env === 'development') ? 'source-map':false,
    module:{
        rules:{
            test:/\.m?js$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader",
                
            }
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./base.html'
        }),
        new CleanWebpackPlugin()
    ]
}