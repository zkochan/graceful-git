'use strict'
const gracefulGit = require('.')

gracefulGit(['status', 'README.md'])
  .then(result => console.log(result.stdout))
  .catch(err => console.error(err))
