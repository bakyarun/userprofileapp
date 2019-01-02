var path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = function () {
   return {
       mode:'development',
       entry: './src/main.ts',
       output: {
        path: path.join(__dirname, "../dist/"),
        filename: "[name].bundle.js",
       },
       resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
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
            include: helpers.root('src', 'app'),
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
            new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)fesm5/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
            ),
           //new CopyWebpackPlugin([
           //    { from: 'src/assets', to: 'assets'}
           //]), 
           new HtmlWebpackPlugin({
               template: __dirname + '/src/index.html',
               filename: "index.html",
               path: path.join(__dirname ,'../dist'),
               
           }),
           new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/app/app.module#AppModule',
            sourceMap: true
         })
           
       ],
       optimization: {
        splitChunks: {
        chunks: 'all'
        }
    }
   };
}