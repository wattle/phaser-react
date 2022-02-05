/* webpack.config.js */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// https://webpack.js.org/plugins/html-webpack-plugin/
const HtmlWebPackPlugin = require('html-webpack-plugin');

const environment =
  process.env.REACT_APP_HOST_TYPE || process.env.NODE_ENV || 'development';
console.log(`Environment is ${environment
}`);

const packageData = require('./package.json');
const { WebpackManifestPlugin
} = require('webpack-manifest-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const environment = env.NODE_ENV || 'development';
  console.log(`Environment is ${environment
    }`);
  const devMode = environment !== 'production';

  return {
    mode: devMode ? 'development' : 'production',
    entry: {
      main: path.resolve(__dirname, 'src', 'index.tsx')
        },
    devtool: devMode ? 'source-map' : false,
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.css'],
      modules: ['node_modules']
        },
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[fullhash].js',
      publicPath: '/'
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      allowedHosts: 'all',
      hot: true
        },
    module: {
      rules: [
                {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
                },
                {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
                },
                {
          test: /\.css$/i,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
                    ]
                },
                {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'
                    ]
                },
                {
          test: /\.(jpe?g|png|gif|svg)/,
          type: 'asset'
                }
            ]
        },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'public/index.html')
            }),
      new WebpackManifestPlugin(),
      new CopyPlugin({
        patterns: [
                    {
            from: path.resolve(__dirname, 'src/assets/*.*'),
            to: 'assets/[name][ext]'
          }
        ],
        options: {
          concurrency: 1
        }
      }),
      new webpack.DefinePlugin({
        'process.env.npm_ver': JSON.stringify(packageData.version),
        'process.env.project_name': JSON.stringify(packageData.name),
      })
    ].concat(devMode ? [] : [new MiniCssExtractPlugin()])
  };
};
