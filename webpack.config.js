/* WEBPACK TEMPLATE SETUP 
 * https://webpack.js.org/guides/getting-started/
 *
 * All steps for getting a new webpack-based website started via VS Code
        [terminal command]
 * 
 *  --- SHORT SUMMARY --- 
 * 1: Run the following commands:
        npm init y
        npm install webpack webpack-cli --save-dev
        npm install --save-dev html-webpack-plugin
        npm install --save-dev webpack-dev-server
        npm install --save-dev style-loader css-loader
        npm install --save-dev jquery
 * 2: Add the following values to package.json's "scripts":{} array:
        "watch": "webpack --watch",
        "build": "webpack"
 * 3: Uncomment the JQuery and CSS { sections } of the module: {rules: { ... }} below
 * 
 *      Done! Run "npm watch" and "npm build" to get underway
 * 
 * 
 *  --- DETAILED STEPS --- 
 * 
 * 1: Create new folder (project, vscode workspace, github repo, etc)
 * 2: install npm
        npm init y
 * 3: initialize webpack
        npm install webpack webpack-cli --save-dev
 * 4: initialize html webpack plugin, to auto-generate .html files in ./dist folder upon build 
        npm install --save-dev html-webpack-plugin
 * 5: initialize webpack dev server, for local testing at url "localhost:8080" (while watching)
        npm install --save-dev webpack-dev-server
 * 6: add the following values to package.json's "scripts": {} array
        "build": "webpack",
        "watch": "webpack --watch",
 *          to enable terminal commands "npm run build" and "npm run watch", respectively 
 * 7: optionally, prep CSS loader, to import .css files from ./src
        npm install --save-dev style-loader css-loader
 *          then uncomment the CSS { section } from module rules below
 * 8: optionally, import the JQuery library, 
        npm install --save-dev jquery
 *          then uncomment the JQuery { section } from module rules below
 * 9: create a ./src subfolder, and inside it, a file called index.js
 * 10: uncomment the line "index: './src/index.js'," under entry { } below
 * 
 * 
 * 
 *      Done! Now go make a beautiful website.
 *          Use "npm watch" and "npm build" :) 
 * 
 * 
*/


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    //                                                  set export mode
    // mode: 'production',
    mode: 'development',

    // enable Watch Mode (auto refresh changes), 
    watch: true, // see: https://webpack.js.org/guides/development/#using-watch-mode

    entry: { //                                         entry: place to begin generating webpage from
        // index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            //                                          webpage title here
            title: 'New Website',
        }),
    ],

    // enable inline source mapping, so we can see lines/error info in browser console output
    devtool: 'inline-source-map', // see: https://webpack.js.org/guides/development/#using-source-maps

    // enable webpack dev server so we can locally test 
    // run: npm install --save-dev webpack-dev-server
    // remember to also add check "optimization" at bottom
    // see: https://webpack.js.org/guides/development/#using-webpack-dev-server
    devServer: {
        static: './dist',
    },

    module: {
        rules: [
            //                                          module rules (with some presets)

            // Jquery (requires library): npm install --save-dev jquery
            // { 
            //     test: require.resolve("jquery"),
            //     loader: "expose-loader",
            //     options: {
            //         exposes: ["$", "jQuery"],
            //     },
            // },

            // CSS (requires loader): npm install --save-dev style-loader css-loader
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader', 'postcss-loader'],
            // },

            // Images asset loading
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            // Fonts asset loading
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // build time optimization, see https://webpack.js.org/guides/development/#using-webpack-dev-server 
    optimization: {
        runtimeChunk: 'single',
    },
};