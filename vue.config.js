const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // devServer: {
  //   public: "http://0.0.0.0"
  // }
  chainWebpack: config => {
    // modify default svg loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

    // svg-icon
    config.module
      .rule('svg-icon')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}
