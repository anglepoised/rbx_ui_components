var path = require('path'),
    webpack = require('webpack'),
    bowerRoot = path.join(__dirname, 'vendor'),
    webpackPostcssTools = require('webpack-postcss-tools'),
    map = webpackPostcssTools.makeVarMap('vendor/rbx_style_guide/src/assets/styles/variables.css'),
    media = webpackPostcssTools.makeVarMap('vendor/rbx_style_guide/src/assets/styles/boot/responsive.css'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    // ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    config;

config = {
    cache: true,
    entry: {
        // Our main entry point of the project
        app: path.join(__dirname, './dev/app.js')
    },

    output: {
        path: path.join(__dirname, 'dev'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    resolve: {
        modulesDirectories: [
            bowerRoot
        ],
        alias: {
            dev: path.join(__dirname, 'dev'),
            components: path.join(__dirname, 'src')
        }
    },

    plugins: [
        // new ngAnnotatePlugin({
        //     add: true
        // }),
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main']),
            new webpack.ResolverPlugin.FileAppendPlugin(['index.js'])
        ]),
        new ExtractTextPlugin('style.css')
    ],

    module: {
        loaders: [
            {
                test:   /\.css$/,
                // loader: 'style-loader?singleton!css-loader!postcss-loader',
                loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')
            }
        ],
        noParse: [
            // We don't need to webpack "parse" pre-packaged Angular modules
            path.join(bowerRoot, '/angular'),
            path.join(bowerRoot, '/angular-ui-router')
        ]
    },
    postcss: [
        webpackPostcssTools.prependTildesToImports,
        require('postcss-import')({
            path: [
                path.join(__dirname, 'vendor/rbx_style_guide/src/assets/styles')
            ]
        }),
        require('postcss-custom-media')({
            extensions: media.media
        }),
        require('postcss-custom-properties')({
            variables: map.vars
        }),
        require('postcss-color-function')(),
        require('postcss-calc')(),
        require('postcss-media-minmax')(),
        require('postcss-font-variant')(),
        require('autoprefixer-core')({
            remove: false,
            cascade: false
        })
    ]
};

module.exports = config;
