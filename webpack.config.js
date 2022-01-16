const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';

  return {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
      port: 3000,
      hot: true,
      static: { directory: path.join(__dirname, 'public') },
      historyApiFallback: true,
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
          },
          exclude: /node_modules/,
        }
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
  };
}