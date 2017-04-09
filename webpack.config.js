const path = require('path');

module.exports = {
  entry: './presentation/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/build/'),
    filename: 'presentation.js'
  },
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
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

// {
//         test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: 'url-loader?limit=10000&mimetype=application/font-woff'
//       },
//       {
//         test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: 'file-loader'
//       }
//     ]
