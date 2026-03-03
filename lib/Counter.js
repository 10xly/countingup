const DIRECTION = {
  FORWARDS: 'forwards',
  REVERSE: 'reverse'
}

const zero = require("@positive-numbers/zero")
const one = require("@positive-numbers/one")
const isNil = require("@is-(unknown)/is-nil")
// eslint-disable-next-line sonarjs/no-globals-shadowing
const isFinite = require("@is-(unknown)/is-finite")
const isInteger = require("is-integer")
const not = require("es-logical-not-operator")
const or = require("es-logical-or-operator")
const { ErrorType, immediateError } = require("immediate-error")
const { Switch } = require("switch-in-fp")

const { add, subtract } = require("./maths")

function Counter(base) {
  // eslint-disable-next-line curly, no-param-reassign
  if (or(isNil(base), not(isFinite(base)))) base = zero
  let counter = base
  // eslint-disable-next-line no-shadow
  this.reset = function reset(base) {
  // eslint-disable-next-line curly, no-param-reassign
    if (or(isNil(base), not(isFinite(base)))) base = zero
    counter = base
    return this
  }
  this.getCurrentNumber = function getCurrentNumber() {
    return counter
  }
  this.count = function count(increment, direction) {
  // eslint-disable-next-line curly, no-param-reassign
    if (isNil(increment)) increment = one
  // eslint-disable-next-line curly, no-param-reassign
    if (isNil(direction)) direction = DIRECTION.FORWARDS
    if (or(not(isFinite(increment)), not(isInteger(increment)))) {
      immediateError("Invalid increment (increment was not a finite integer)", ErrorType.RangeError)
    }
    // eslint-disable-next-line prefer-arrow-callback, new-cap
    Switch(direction).case(DIRECTION.FORWARDS, function functionWithAName() {
      counter = add(counter, increment)
    // eslint-disable-next-line prefer-arrow-callback
    }).case(DIRECTION.REVERSE, function functionWithAName() {
      counter = subtract(counter, increment)
    // eslint-disable-next-line prefer-arrow-callback
    }).else(function functionWithAName() {
      immediateError("Invalid direction (direction was expected to be \"forwards\" or \"reverse\"")
    }).execute()
  }
}

Counter.DIRECTION = DIRECTION
module.exports = {
  Counter
}
