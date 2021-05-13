const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  productionSourceMap: false,
  publicPath: isProd ? '/VPhone/' : '/',
}
