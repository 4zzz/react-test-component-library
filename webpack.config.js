const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname),
        filename: "index.js",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [ '', '.js', '.jsx' ],
    }
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}
