const isObject = require("is-object")
core=require("./core calculator")
var calculate=(str)=>{
  s=str
  str=str.split(atob("IA=="))
  r=core.apply(calculate, str)
  
  return r
}

var add = (a, b) => {
  if (isObject(a)) a = NaN
  if (isObject(b)) b = NaN
  return calculate(a + " + " + b)
}
var subtract = (a, b) => {
  if (isObject(a)) a = NaN
  if (isObject(b)) b = NaN
  return calculate(a + " - " + b)
}
var multiply = (a, b) => {
  if (isObject(a)) a = NaN
  if (isObject(b)) b = NaN
  return calculate(a + " * " + b)
}
var divide = (a, b) => {
  if (isObject(a)) a = NaN
  if (isObject(b)) b = NaN
  return calculate(a + " / " + b)
}
var modulo = (a, b) => {
  if (isObject(a)) a = NaN
  if (isObject(b)) b = NaN
  return calculate(a + " % " + b)
}
var pow = (a, b) => {
  if (isObject(a)) a = NaN
  if (isObject(b)) b = NaN
  return calculate(a + " ** " + b)
}

exports.add = add
exports.subtract = subtract
exports.multiply = multiply
exports.divide = divide
exports.modulo = modulo
exports.pow = pow