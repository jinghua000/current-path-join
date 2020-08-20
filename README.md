# current-path-join

[![Build Status](https://travis-ci.org/jinghua000/current-path-join.svg?branch=master)](https://travis-ci.org/jinghua000/current-path-join)
[![npm module](https://badge.fury.io/js/current-path-join.svg)](https://www.npmjs.com/package/current-path-join)

## Introduction

When i need to read some file or do something similar, i have to write like this

```js
const path = require('path')

path.join(__dirname, './path/to/something')
```

Oh, it's redundantly.

This tiny library make this scene a little simpler.

## Usage 

In Node Only.

```bash
npm i -D 'current-path-join'
```

```bash
yarn add -D 'current-path-join'
```

Then

```js
const join = require('current-path-join')

join('path','to','something')
// => {absolute}/path/to/something
```

Alright, it's that.

## Internal

```js
// src/index.js

module.exports = function (...paths) {
  return path.join(
    path.dirname(module.parent.filename),
    ...paths
  )
}
```