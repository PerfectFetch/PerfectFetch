const path = require('path');

module.exports =  {
    "mode": "development",
    "entry": "client/index.js",
    "output": {
        "path": path.join(__dirname, 'build',
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": "eslint-loader"
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "react"
                        ]
                    }
                }
            },
            {
                "test": /\.scss$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        publicPath: '/build/',
        port: 8080,
        proxy: {
          '/': 'http://localhost:3000',
        }
      }
};