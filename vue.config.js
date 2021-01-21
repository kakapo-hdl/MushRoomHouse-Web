//跨域访问问题 
const proxyObj = {}
proxyObj['/'] = {
  target: 'http://localhost:8070',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
}

module.exports = {
  devServer: {
    // host: 'localhost',
    // port: 8080,
    proxy: proxyObj
},
//重新配置路径
chainWebpack: config => {
  config.module
    .rule('images')
    .use('url-loader')
    .loader('url-loader')
    .tap(options => {
      options.limit = -1
      return options
    })
},
  configureWebpack: {
    devtool:'source-map',
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/components/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
