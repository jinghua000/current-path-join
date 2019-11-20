'use strict'

const path = require('path')

module.exports = function (...args) {
  return path.join(
    path.dirname(module.parent.filename),
    ...args
  )
}