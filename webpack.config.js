const path = require('path');

const rules = [];
rules.push({
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
});

module.exports = {
  entry: './src/index.ts',
  module: {
    rules,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};