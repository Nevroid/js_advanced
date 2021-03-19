const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'main.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },

    module: {

        // rules: [{
        //     test: /\.js$/,
        //     use: [{
        //         loader: 'babel-loader'
        //     }, ], 
        //     test: /\.css$/,
        //     use: [{
        //             loader: 'style-loader'
        //         }, 
        //         {
        //             loader: 'vue-style-loader',
        //         }, 
        //         {
        //             loader: 'css-loader',
        //             options: {
        //                 modules: true,
        //             },
        //         },

        //     ],

        //     test: /\.vue$/,
        //     use: [{
        //         loader: 'vue-loader'
        //     }]

        // }],
        rules: [
            {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }, ],}, 
            {test: /\.css$/,
            use: [{
                    loader: 'style-loader'
                }, 
                {
                    loader: 'vue-style-loader',
                }, 
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },

            ],},

            {test: /\.vue$/,
            use: [{
                loader: 'vue-loader'
            }]},

        ],
    },


    plugins: [
        new VueLoaderPlugin()
    ]

}