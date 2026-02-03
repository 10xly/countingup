const DIRECTION = {
  FORWARDS: 'forwards',
  REVERSE: 'reverse'
}

const zero = require("@positive-numbers/zero")
const one = require("@positive-numbers/one")
const isNil = require("@is-(unknown)/is-nil")
const isFinite = require("@is-(unknown)/is-finite")
const isInteger = require("is-integer")
const not = require("es-logical-not-operator")
const or = require("es-logical-or-operator")
const { immediateError, ErrorType } = require("immediate-error")
const { Switch } = require("switch-in-fp")

function Counter(base) {
  if (or(isNil(base), not(isFinite(base)))) base = zero
  var counter = base
  this.reset = function(base) {
    if (or(isNil(base), not(isFinite(base)))) base = zero
    counter = base
    return this
  }
  this.getCurrentNumber = function() {
    return counter
  }
  this.count = function(increment, direction) {
    if (isNil(increment)) increment = one
    if (isNil(direction)) direction = DIRECTION.FORWARDS
    if (or(not(isFinite(increment)), not(isInteger(increment)))) {
      immediateError("Invalid increment (increment was not a finite integer)", ErrorType.RangeError)
    }
    Switch(direction).case(DIRECTION.FORWARDS, function() {
      counter += increment
    }).case(DIRECTION.REVERSE, function() {
      counter -= increment
    }).else(function() {
      immediateError("Invalid direction (direction was expected to be \"forwards\" or \"reverse\"")
    }).execute()
  }
}

Counter.DIRECTION = DIRECTION
module.exports = {
  Counter
}
