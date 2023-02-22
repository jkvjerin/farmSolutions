const mode = require('webpack.production.config.js')
const path = require('path')
var config = {
  // define entry point
  entry: './src/index.js',
  mode: 'development',
  // define output point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devtool: 'eval-source-map',
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