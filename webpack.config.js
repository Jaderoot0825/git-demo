//commonjs导出模块用 module.exports
//commonjs引入模块用 require
const path  = require("path")
const webpack  = require("webpack")
const HtmlWebpackPlugin  = require("html-webpack-plugin")
//引入VueLoaderPlugin插件
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
    // resolive:{//wenpack别名 文件重定向
    //    alias:{vue$:'./vue/dist/vue.js'}
    // },
    mode:"development",
    entry: path.resolve(__dirname,"./src/main.js"),
    output: {
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    devServer: {
        open:true,
        port:3000,
        contentBase:"src",
        hot:true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            //压迫编译的html文件的位置
            template: path.resolve(__dirname,"src/index.html"),
            //内存中的html文件叫什么名字
            filename: "index.html"
        }),
        new VueLoaderPlugin(),
          
           
    ],
    //样式导入
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],

            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader',"less-loader"],

            },
            {
                test: /\.scss$/,
                use: "sass-loader",

            },
            {
                test: /\.(png|jpg|gif|bmp|jpeg)$/,
                use: [
                    {
                        //当图片小于8kb的时候 用name的方法改变图片的名字
                        loader: "url-loader",
                        options: {
                            limit:8192,
                            name:"[hash:16]-[name].jpg"
                        }
                    }
                ]


            },
            {
                //字体图标的处理
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: [
                    {
                        //当图片小于8kb的时候 用name的方法改变图片的名字
                        loader: "url-loader",

                    }
                ]


            },
            {
                test: /\.js$/,
                use: "babel-loader",
                //除了node_modules文件  其他全部转换
                exclude: /node_modules/


            },
        ]
    },

}