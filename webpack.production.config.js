// webpack.production.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry : __dirname + '/app/main.js', //指定的唯一入口
    output: {
        path: __dirname + '/build', // 打包后的文件存放的地方
        filename: 'bundle-[hash].js' //打包后输出文件的文件名
    },
    devtool: 'none', //注意修改了这里，这能大大压缩我们的打包代码
    devServer: {
        contentBase: './build', //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        port: 8585,
        inline: true //实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },{
                        loader: 'css-loader',
                        options:{
                            modules:true
                            
                        }
                    },{
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin ({
            template : __dirname + '/app/index.tmpl.html'//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
        
        
    ],
};