//导入路径处理模块，node.js自带的核心模块，不需要额外安装
let path = require('path');

// 导入分离css插件
let miniCssExtractPlugin = require('mini-css-extract-plugin');

// 导入处理html模板插件
let htmlWebpackPlugin = require('html-webpack-plugin');

// 暴露配置文件
module.exports = {

    // 配置模式
    // development：开发模式
    // production：生产模式
    mode:'development',

    // 配置入口
    entry:{
        app:'./app/app.js'
    },

    // 文件输出路径
    output:{
        // 打包输出的文件路径
        path:path.resolve(__dirname + '/build'),

        // 打包输出文件重命名
        filename:'[name].min.js'
    },

    // 配置loader
    module:{
        // 定义loader规则
        rules:[
            // 每一个对象就是一个loader规则
            // 处理css
            {
                // 匹配文件规则
                test:/\.css$/,
                use:[
                    // 分离css
                    {loader:miniCssExtractPlugin.loader},
                    {loader:'css-loader'},
                ]
            },

            // 处理less
            {
                test:/\.less$/,
                use:[
                    // 分离css
                    {loader:miniCssExtractPlugin.loader},
                    {loader:'css-loader'},
                    {loader:'less-loader'},
                ]
            },

            // 处理图片
            {
                test:/\.(png|gif|jpg|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            // 如果图片<=1000B，图片被转为base64
                            limit:1000,
                        }
                    }
                ]
            },

            {
              test:/\.html?$/,
              use:[
                {loader:'html-withimg-loader'}
              ]
            }
        ]

    },

    // 配置插件
    plugins:[
        // 实例化分离css插件
        new miniCssExtractPlugin({
            // 输出文件名
            filename: '[name].min.css'
        }),

        // 实例化处理html模板插件
        new htmlWebpackPlugin({
            // 处理模板的路径
            template:'./app.html',
            // true：将生成的js插入到body结束标签之前，默认为true
            // false：没有插入生成的js
            // head：将生成的js插入在head结束标签之前
            // body：等同于true
            inject:'body',
            // 最小化
            minify:{
                // 是否移除注释
                removeComments:true,
                // 是否移除标签属性的引号
                removeAttributeQuotes:true,
                // 是否移除html文件的空白符
                collapseWhitespace:true,
            },
            // 输出文件重命名
            filename:'app.min.html'

        })
    ],

}