var webpack = require('webpack');
var fs = require('fs');

var packageContents = fs.readFileSync('./package.json', 'utf8');
var packageObject = JSON.parse( packageContents );

var filename = packageObject.name + '-' + packageObject.version;
packageObject.version += '.' + Math.round( Math.random() * 1000 );

module.exports = {
  entry: {
    theme: [
      './src/'
    ]
  },
  output: {
    path: __dirname + '/dist/',
    filename: filename + '-[hash].js',
    publicPath: '/static/'
  },
  //externals: {
  //  "react": "React",
  //  "react-dom": "ReactDOM"
  //},
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __ISPROD__ : true,
      __FLPACKAGE__ : JSON.stringify(packageObject.name),
      __FLPACKAGEVERSION__ : JSON.stringify(packageObject.version)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
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
