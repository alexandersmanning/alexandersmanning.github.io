const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./lib/main.js",
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
               '@babel/preset-react'
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
