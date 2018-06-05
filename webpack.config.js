const path = require("path");
const ROOT_PATH = path.resolve(__dirname);
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: ["./main.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js",
    },
    plugins: [
        new webpack.ProvidePlugin({
            Vue: 'vue',
            '_': 'lodash',
            'utils': 'utils',
            type: 'type'
        }),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './template/index.html',
            filename: 'index.html',
            hash: true,
            inject: true,
            chunks: ["app"],
            files: {
                css: []
            }
        })
    ],
    module: {
        rules: [
            {test: /\.vue$/, use: [{loader: 'vue-loader'}]},
            {test: /\.js$/, exclude: /node_modules/, use: [{loader: 'babel-loader'}]},
            {test: /\.css/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},
            {test: /\.less/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'less-loader'}]},
            {test: /\.(png|jpg|gif|jpeg)$/, use: [{loader: 'url-loader?limit=2000&name=img/[name].[ext]'}]},
            {test: /\.json$/, use: [{loader: 'json-loader'}]},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{loader: 'url-loader?limit=10000&minetype=application/font-woff'}]
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{loader: 'file-loader'}]},
        ],
    },
    resolve: {
        extensions: ['.js', '.vue'], //后缀名自动补全
        alias: {
            vue: 'vue/dist/vue.js',
            router: ROOT_PATH + '/router/router',
            store: ROOT_PATH + '/store/store',
            xmUI: ROOT_PATH + '/xmUI/src/index',
            utils: ROOT_PATH + '/js/public/utils',
            type: ROOT_PATH + '/store/mutation-types',
            lodash: ROOT_PATH + '/js/public/lodash.min',
            iScroll: ROOT_PATH + "/js/public/iscroll",
            swiper: ROOT_PATH + "/js/public/swiper",
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        host: "192.168.199.185",
        compress: true,
        port: 9000,
        proxy: [{ // proxy URLs to backend development server
            context: ["/rms"],
            target: "http://192.168.199.185:8080",
        }],
    },
    devtool: 'inline-source-map'
};