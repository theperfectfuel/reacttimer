var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    //'script!foundation-sites/dist/foundation.min.js',
    './app/main.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    inline: true,
    port: '8080'
  },
  resolve: {
    root: __dirname,
    alias: {
      App: 'app/components/App.jsx',
      Countdown: 'app/components/Countdown.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Controls: 'app/components/Controls.jsx',
      Timer: 'app/components/Timer.jsx',
      Clock: 'app/components/Clock.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss',
      Nav: 'app/components/Nav.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
}
