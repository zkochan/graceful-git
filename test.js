'use strict'
const git = require('.')
const test = require('tape')

test('git command successfully completes', t => {
  git(['status'])
    .then(() => t.end())
    .catch(t.end)
})
