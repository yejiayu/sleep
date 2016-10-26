'use strict'

const co = require('co')
const sleep = require('./')

co(function* gen() {
  console.time('sleep')
  yield sleep(2000)
  console.timeEnd('sleep')
}).catch(console.error)