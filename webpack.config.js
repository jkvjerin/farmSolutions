const path = require('path')
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const TerserWebpackPlugin = require("terser-webpack-plugin");

//const modepro = require('production')
// import { modepro } from '.\webpack-production-config.jsproduction'
 const config = {
  // define entry point
  entry: {
    main :'./src/index.js',
    addproduct:'./src/main_addproduct.js',
    showProduct :'./src/showProduct.js',
    // ar: "./src/index.ts",
    home:'./src/home.js',
  }
  // ,
  // module: {
  //   rules: [
  //     {
  //       test: /\.ts?$/,
  //       use: "ts-loader",
  //       exclude: /node_modules/,
  //     },
  //     {
  //       test: /\.css$/i,
  //       use: ["style-loader", "css-loader"],
  //     },
  //     {
  //       test: /\.(png|jpe?g|gif|glb)$/i,
  //       use: [
  //         {
  //           loader: "url-loader",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // resolve: {
  //   extensions: [".tsx", ".ts", ".js", ".css", ".jpg"],
  // }
  ,
   mode: 'development',
  // mode: 'production',
  // define output point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].js`
  },
  devtool: 'source-map',
  watch: true,
};
module.exports = config;

// module.exports = (env, argv) => {
//   if (argv.mode === 'development') {
//     config.devtool = 'source-map';
//   }

//   if (argv.mode === 'production') {
//     //...
//   }

//   return config;
// };