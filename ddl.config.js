/**
 * Created by cx on 2018/8/6.
 * Include
 * description
 */
const path = require("path");
const ROOT_PATH = path.resolve(__dirname);
const webpack = require("webpack");

module.exports = {
    output: {
        path: path.resolve(__dirname, "dll"),
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "libs": [
            'vue/dist/vue.esm.js',
            'vuex',
            'vue-resource',
            'vue-router',
            'lodash'
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dll', '[name]-manifest.json'),
            name: '[name]',
            context: __dirname
        }),
    ]
}