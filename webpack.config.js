//configurations to use webpack 

var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = function () {
   return {
       mode:'development',
       entry: './src/main.ts', //entry file which server to start with
       output: {               //path where output bundles are placed
        path: path.join(__dirname, "./dist/"),
        filename: "[name].bundle.js",
       },
       resolve: {
        extensions: ['.ts', '.js']
      },
      module: {       //rules to check different files and load appropriate loader
        rules: [
          {
            test: /\.ts$/, 
            loader: '@ngtools/webpack'
          },
          { test: /\.html$/, 
            loader: 'html-loader' },
          {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader?name=assets/img/[name].[hash].[ext]'
          },
          {
            test: /\.css$/,
            include: path.resolve(__dirname,'src/app'),
            loader: 'raw-loader'
          },
          {
            test:/\.scss$/,
            include: [path.resolve(__dirname, './src/assets/scss')],
            use:['style-loader','css-loader','sass-loader']
          }
        ]
        },

       plugins: [
            new webpack.ContextReplacementPlugin(   //Plugin to set the context path to start with
            /angular(\\|\/)core(\\|\/)fesm5/,
            path.resolve(__dirname,'./src'), // location of src
            {} 
            ),
            
           new HtmlWebpackPlugin({
               template: __dirname + '/src/index.html',
               filename: "index.html",
               path: path.join(__dirname ,'./dist'),
               
           }),
           new AngularCompilerPlugin({        //plugin to perform AOT compilation
            tsConfigPath: './tsconfig.json',
            entryModule: './src/app/app.module#AppModule',
            sourceMap: true
         })
           
       ],
       optimization: {    //split files into chunks
        splitChunks: {
        chunks: 'all'
        }
    }
   };
}