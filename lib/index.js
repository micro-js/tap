/**
 * Modules
 */

/**
 * Expose tap
 */

module.exports = tap['default'] = tap

/**
 * tap
 */

function tap (fn) {
  return function (x) {
    fn(x)
    return x
  }
}
