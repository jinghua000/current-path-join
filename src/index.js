'use strict'

const path = require('path')

/**
 * @param {...string} paths - paths to join
 * @returns {string} joined path by current directory
 * @example
 * 
 * const join = require('current-path-join')
 * 
 * join('../path/to/something')
 * join('..', 'path', 'to', 'something')
 */
module.exports = function (...paths) {
  return path.join(
    path.dirname(module.parent.filename),
    ...paths
  )
}