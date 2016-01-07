/**
 * Imports
 */

var tap = require('..')
var test = require('tape')

/**
 * Vars
 */

var effect = tap(function (val) {
  void val
})

/**
 * Tests
 */

test('should return the given argument for the side effect', function (t) {
  t.equal(effect(1), 1)
  t.end()
})
