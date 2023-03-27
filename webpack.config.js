const path = require('path')
//const modepro = require('production')
// import { modepro } from '.\webpack-production-config.jsproduction'
 const config = {
  // define entry point
  entry: {
    main :'./src/index.js',
    addproduct:'./src/addroductmain.js',
    showProduct :'./src/showProduct.js',
  }
  ,
  //  mode: 'development',
  mode: 'production',
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