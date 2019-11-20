'use strict'

const path = require('path')

/**
 * @param {string[]} paths - paths to join
 * @returns {string} joined path by current directory
 */
module.exports = function (...paths) {
  return path.join(
    path.dirname(module.parent.filename),
    ...paths
  )
}