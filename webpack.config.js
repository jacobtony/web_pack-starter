const HtmlWebpackPlugin =   require('html-webpack-plugin');
const MyPlugin = require('./plugins/myPlugin');
const statsPlugin = require('./plugins/statsPlugin');
const path = require('path');
const { DefinePlugin } = require('webpack');


module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        environment: {
            dynamicImport: true
        },
        assetModuleFilename: '[name][ext]'
      
    },
    resolveLoader:{
        modules: [ 'node_modules', path.resolve(__dirname, 'loaders') ]
    },
    devtool:'source-map',
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.js$/,
                use:[{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    } 
                }]
            },
            {
                test: /\.worker\.js$/,
                use: 'worker-loader'
            },
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'my-loader',
            //         options:{
            //             name: 'jim'
            //         }
            //     }
            // },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                use: 'my-loader',
                type: 'asset/resource'
            }
        ],
    },
    
    devServer:{ 
        static: {
            directory: path.join(__dirname, 'public')
          },
        compress: true,
        hot:true,
        open:true,
        historyApiFallback: true,
        port: 9000
    },
    plugins: [ new HtmlWebpackPlugin({
        title: "Webpack App",
        filename: "index.html",
        template: 'src/template.html'
    }),
    new MyPlugin(),
    new statsPlugin()
]
};