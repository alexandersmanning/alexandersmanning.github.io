module.exports = {
  context: __dirname,
  entry: "./lib/main.js",
  output: {
    path: "./lib/",
    filename: "bundle.js"
  },
    module: {
    loaders: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};