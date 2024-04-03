const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rawLoader = require('raw-loader');

module.exports = {
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ]
      },
  entry: './src/index.js',
  devServer: {
    static: './dist',
    // watchFiles: ['src/index.html'],
  },
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'), // Path to your template
      filename: 'index.html', // Output filename
      inject: 'head', // Inject script tags in the 'head' section
      scriptLoading: 'defer', // Add 'defer' attribute to script tags
      
    }),
  ],
  devServer: {
    watchFiles: ['src/**/*.html', 'public/**/*'],
  },
};