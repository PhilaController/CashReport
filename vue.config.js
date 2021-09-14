const webpack = require("webpack");

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    externals: {
      jquery: "jQuery",
      $: "jQuery"
    },
    entry: {
      main: './src/main.js',
    },
    output: {
      filename: '[name].[fullhash:8].bundle.js'
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
    ],
    optimization: {
      splitChunks: false
    },
  },
  css: {
    extract: false
  }
}
