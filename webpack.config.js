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
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]

}