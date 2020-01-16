const path = require('path');
const postCssPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested')
]

module.exports = {
    entry: './app/assets/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundled.js'
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'), 
        hot: true,
        port: 8080,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader', {loader: 'postcss-loader', options: {plugins: postCssPlugins}}
                ]
            }
        ]
    }
}