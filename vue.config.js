//重新配置路径
module.exports = {
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

