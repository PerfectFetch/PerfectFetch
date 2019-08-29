var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './client/index.js',
    output : {
        path : path.resolve(__dirname , 'public'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {test : /\.(jsx)$/, use:'babel-loader'},
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.(s*)css$/, use:['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ],
    // this allows to bridge port 8080 with port 3000 requests
    devServer: {
        port: 8080,
        proxy: {
          '/': 'http://localhost:3000/',
        }
      }
};
