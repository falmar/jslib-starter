const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin()
]

const optimization = {
  minimizer: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ],
  splitChunks: {
    chunks: 'all'
  }
}

module.exports = {
  mode: 'production',
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

  devtool: 'source-map',

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
