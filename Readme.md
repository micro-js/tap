
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

## Why?

Let's say you have a some kind of a reducing function in es2015 where you want to log a given `state`. Instead of refactoring it to a larger function you can just wrap it in a `tap(console)`

```js
const reducer = (state, action) => [...state, id: action.payload]

// instead of

const reducer = (state, action) => {
  console.log(state)
  return [...state, id: action.payload]
}

// you can just wrap it

const reducer = (state, action) => [...log(state), id: action.payload]
```

This simplifies quick debugging a lot.

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
