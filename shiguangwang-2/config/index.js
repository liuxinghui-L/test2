'use strict'
// Template version: 1.2.8
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/Service/callback.mi':{
                            target:'https://m.mtime.cn',
                            host:'m.mtime.cn',
                            changeOrigin:true,
            // https://m.mtime.cn/Service/callback.mi/Showtime/LocationMovies.api?locationId=292&t=20181320181534039
        },
        '/apiA':{
            target:'http://localhost:3000',
            host:'localhost:3000',
            changeOrigin:true,
        },
        // https://ticket-m.mtime.cn/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=371&_=1515326000868
        // https://ticket-m.mtime.cn/api/proxy/ticket/Showtime/HotCitiesByCinema.api?_=1515326000870
        // 购票
        '/api/proxy':{
                            target:'https://ticket-m.mtime.cn',
                            host:'ticket-m.mtime.cn',
                            changeOrigin:true,            
        },
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
