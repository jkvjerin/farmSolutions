const path = require('path')
//const modepro = require('production')
// import production from './webpack.production.config.js';
var config = {
  // define entry point
  entry: './src/index.js',
  // mode: 'development',
  mode: 'development',
  // define output point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
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