const join = require('../src')
const path = require('path')
const fs = require('fs-extra')
const { strictEqual } = require('assert')

describe('test path', () => {

  const tmpFilePath = '../demo/foo.json'

  it('should return the path relative to current path', () => {

    strictEqual(
      join(tmpFilePath),
      path.join(__dirname, tmpFilePath)
    )

  })

  it('should work with rest parameters', () => {

    strictEqual(
      join(...tmpFilePath.split('/')),
      path.join(__dirname, tmpFilePath)
    )

  })

  it('should read the file correctly', () => {

    strictEqual(
      fs.readJSONSync(join(tmpFilePath)).foo,
      'i am foo'
    )

  })

  it('should equal with __dirname if not pass arguments', () => {

    strictEqual(
      join(),
      __dirname
    )

  })

})