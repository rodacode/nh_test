module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
          ? '/nh_test_web/'
          : '/',
    css: {
      sourceMap: true
    }
 }