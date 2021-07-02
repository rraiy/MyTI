const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode_env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode:mode_env,
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'main.[hash].js',
        assetModuleFilename:'images/[hash][ext][query]'
    },
    devtool:(mode_env === 'development') ? 'source-map':false,
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true,
        // historyApiFallback: true,
        port:5000,
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
            test: /\.(gif|svg|jpg|png)$/,
            use:{
                    loader: 'url-loader',
                    options: {
                        limit:false,
                    },
                },
            type:'asset/resource'
            
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./base.html'
        }),
        new CleanWebpackPlugin()
    ]
}