const path = require("path");
const ROOT_PATH = path.resolve(__dirname);
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');  //样式提取
module.exports = {
    entry: {
        app: ["./main.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js",
        publicPath: 'build/',
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/libs-manifest.json'),
        }),
        new ExtractTextPlugin({
            filename:"style.css",
            disable: false,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            'utils': 'utils',
            type: 'type',
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './template/index.html',
            filename: '../index.html',
            hash: true,
            inject:true
        }),
        new CleanWebpackPlugin(['build'])
    ],
    resolve: {
        extensions: ['.js', '.vue'], //后缀名自动补全
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            router: ROOT_PATH + '/router/router',
            store: ROOT_PATH + '/store/store',
            utils: ROOT_PATH + '/js/public/utils',
            type: ROOT_PATH + '/store/mutation-types',
            iScroll: ROOT_PATH + "/js/public/iscroll",
            swiper: ROOT_PATH + "/js/public/swiper",
        }
    },
    module: {
        rules: [
            {test: /\.vue$/, use: [{loader: 'vue-loader'}]},
            {test: /\.js$/, exclude: /node_modules/, use: [{loader: 'babel-loader'}]},
            {test: /\.(png|jpg|gif|jpeg)$/, use: [{loader: 'url-loader?limit=1000000&name=img/[name].[ext]'}]},
            {test: /\.json$/, use: [{loader: 'json-loader'}]},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{loader: 'url-loader?limit=1000000&minetype=application/font-woff'}]
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{loader: 'url-loader?limit=1000000&name=img/[name].[ext]'}]},
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader',use:[ 'css-loader']})
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader',use:[ 'css-loader','less-loader']})
            },
        ],
    },
    target:"web"
};