'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    // extensions: ['.js', '.vue', '.json'],
    alias: {
      '@views': resolve('src/views'),
      '@api': resolve('src/api'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@styles': resolve('src/styles')
    }
  }
}
