module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8888,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    name: 'Vutify Admin',
    resolve: {
      alias: {
        '@': '/Users/ysya/github/vuetify-admin/src'
      }
    }
  },
  transpileDependencies: ['vuetify']
}
