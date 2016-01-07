
# tap

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Runs a given function with the supplied object, then returns the object.

## Installation

    $ npm install @f/tap

## Usage

```js
var tap = require('@f/tap')

var log = tap(console.log.bind(console))
var ten = log(10)
// -> returns` you 10 and logs it

```

## API

### tap(fn)

- `fn` - Side effect function

**Returns:** A function which can be called with an argument to execute `fn` and return the object

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/tap.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/tap
[git-image]: https://img.shields.io/github/tag/micro-js/tap.svg?style=flat-square
[git-url]: https://github.com/micro-js/tap
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/tap.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/tap
