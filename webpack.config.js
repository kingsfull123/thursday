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
    mode: 'development',
    watch: true,
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