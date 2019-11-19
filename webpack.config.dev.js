const path = require('path')

const plugins = []
const optimization = {}

module.exports = {
  mode: 'development',
  target: 'web',

  entry: {
    bundle: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js', // Use your lib name
    library: 'Lib', // Use your lib name
    libraryExport: 'default',
    libraryTarget: 'var'
  },

  devtool: 'inline-source-map',

  externals: [],
  plugins: plugins,
  optimization: optimization,

  resolve: {
    alias: {}
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
