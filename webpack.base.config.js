var path = require('path'),
    webpack = require('webpack'),
    bowerRoot = path.join(__dirname, 'vendor'),
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
        ])
    ],

    module: {
        noParse: [
            // We don't need to webpack "parse" pre-packaged Angular modules
            path.join(bowerRoot, '/angular'),
            path.join(bowerRoot, '/angular-ui-router')
        ]
    }

};

module.exports = config;
