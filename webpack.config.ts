const path = require('path')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: false
  },
  entry: './service/server-api.ts',
  output: {
    filename: 'server-api.js',
    path: path.resolve(process.env.OUT_DIR || 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  target: 'node',
  externals: [
    nodeExternals()
  ]
}