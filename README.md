# graceful-git

> Executes git commands gracefully. Retries on errors

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/graceful-git.svg)](https://www.npmjs.com/package/graceful-git) [![Build Status](https://img.shields.io/travis/zkochan/graceful-git/master.svg)](https://travis-ci.org/zkochan/graceful-git)
<!--/@-->

## Installation

```sh
npm i -S graceful-git
```

## Usage

<!--@example('./example.js')-->
```js
'use strict'
const gracefulGit = require('graceful-git')

gracefulGit(['status', 'README.md'])
  .then(result => console.log(result.stdout))
  .catch(err => console.error(err))
  //> On branch master
  //  Your branch is based on 'origin/master', but the upstream is gone.
  //    (use "git branch --unset-upstream" to fixup)
  //  nothing to commit, working directory clean
```
<!--/@-->

## API

### `git(args, [retryOptions]) => Promise`

**Arguments:**

- `args` - _string\[]_ - arguments passed to the Git CLI
- `retryOptions` - _object_ - optional. Parameters used by [retry](https://www.npmjs.com/package/retry) when git operation fails.

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io)