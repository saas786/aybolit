const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BabelMultiTargetPlugin } = require('webpack-babel-multi-target-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'nosources-source-map',
  output: {
    filename: '[name].js'
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        },
        sourceMap: true,
        parallel: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [BabelMultiTargetPlugin.loader(), 'uglify-template-string-loader']
      }
    ]
  },
  plugins: [
    // Babel configuration for multiple output bundles targeting different sets
    // of browsers
    new BabelMultiTargetPlugin({
      babel: {
        plugins: [
          // Minify HTML and CSS in tagged template literals
          [
            require('babel-plugin-template-html-minifier'), // eslint-disable-line global-require
            {
              modules: {
                '@polymer/polymer/lib/utils/html-tag.js': ['html']
              },
              htmlMinifier: {
                collapseWhitespace: true,
                minifyCSS: true,
                removeComments: true
              }
            }
          ]
        ],

        // @babel/preset-env options common for all bundles
        presetOptions: {
          // Don’t add polyfills, they are provided from webcomponents-loader.js
          useBuiltIns: false
        }
      },

      // Fix for `nomodule` attribute to work correctly in Safari 10.1
      safari10NoModuleFix: 'inline-data-base64',

      // Target browsers with and without ES modules support
      targets: {
        es6: {
          browsers: [
            'last 2 Chrome major versions',
            'last 2 ChromeAndroid major versions',
            'last 2 Edge major versions',
            'last 2 Firefox major versions'
            // FIXME(web-padawan): template-literals transform is used in Safari 12
            // 'last 3 Safari major versions',
            // 'last 3 iOS major versions'
          ],
          tagAssetsWithKey: false, // don’t append a suffix to the file name
          esModule: true // marks the bundle used with <script type="module">
        }
      }
    }),
    new CompressionPlugin()
  ]
};
