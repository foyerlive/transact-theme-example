var webpack = require('webpack');
var fs = require('fs');
var packageContents = fs.readFileSync('./package.json', 'utf8');
var packageObject = JSON.parse( packageContents );
console.log( 'Starting DEV webpack for %s - %s', packageObject.name, packageObject.version );

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: {
    theme: [
      'webpack-hot-middleware/client?path=http://internal.foyerlive.com:9082/__webpack_hmr',
      './src/',
    ]
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    publicPath: 'http://internal.foyerlive.com:9082/'
  },
  //externals: {
  //  "react": "React",
  //  "react-dom": "ReactDOM"
  //},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __ISPROD__ : false,
      __FLPACKAGE__ : JSON.stringify(packageObject.name),
      __FLPACKAGEVERSION__ : JSON.stringify(packageObject.version)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(ttf|eot|woff2?|svg|png|jpe?g|gif|eot)(\?.*)?$/, //the last ? part is for query strings in eg font awesome
        loader: "url-loader?limit=10000000" // Inline for JT
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
