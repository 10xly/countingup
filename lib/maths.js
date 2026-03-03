const isObject = require("is-object")
// eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global
core=require("./core calculator")
// eslint-disable-next-line vars-on-top, no-var, unicorn/prevent-abbreviations
var calculate=(str)=>{
  // eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global
  s=str
  // eslint-disable-next-line no-param-reassign
  str=str.split(atob("IA=="))
  // eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global
  r=core.apply(calculate, str)
  
  // eslint-disable-next-line no-undef
  return r
}

// eslint-disable-next-line vars-on-top, no-var, id-length, one-var
var add = (a, b) => {
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(a)) a = NaN
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(b)) b = NaN
  // eslint-disable-next-line prefer-template, 10x-engineering/no-operators
  return calculate(a + " + " + b)
}

// eslint-disable-next-line vars-on-top, no-var, id-length, one-var
var subtract = (a, b) => {
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(a)) a = NaN
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(b)) b = NaN
  // eslint-disable-next-line prefer-template, 10x-engineering/no-operators
  return calculate(a + " - " + b)
}
// eslint-disable-next-line vars-on-top, no-var, id-length, one-var
var multiply = (a, b) => {
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(a)) a = NaN
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(b)) b = NaN
  // eslint-disable-next-line prefer-template, 10x-engineering/no-operators
  return calculate(a + " * " + b)
}
// eslint-disable-next-line vars-on-top, no-var, id-length, one-var
var divide = (a, b) => {
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(a)) a = NaN
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(b)) b = NaN
  // eslint-disable-next-line prefer-template, 10x-engineering/no-operators
  return calculate(a + " / " + b)
}
// eslint-disable-next-line vars-on-top, no-var, id-length, one-var
var modulo = (a, b) => {
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(a)) a = NaN
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(b)) b = NaN
  // eslint-disable-next-line prefer-template, 10x-engineering/no-operators
  return calculate(a + " % " + b)
}
// eslint-disable-next-line vars-on-top, no-var, id-length, one-var
var pow = (a, b) => {
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(a)) a = NaN
  // eslint-disable-next-line curly, unicorn/prefer-number-properties, no-param-reassign
  if (isObject(b)) b = NaN
  // eslint-disable-next-line prefer-template, 10x-engineering/no-operators
  return calculate(a + " ** " + b)
}

exports.add = add
exports.subtract = subtract
exports.multiply = multiply
exports.divide = divide
exports.modulo = modulo
exports.pow = pow