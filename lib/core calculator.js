/*
  This file does not follow the best 10x practices because the logic makes 0 sense,
  and that's 10x enough where we don't have to really 10xify it with
  super-dependency hypermodularization.
*/

// eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global
c = "constructor"
// eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global
x=require("node:assert")

// eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global
isObject = require("is-object")

// eslint-disable-next-line no-return-assign, require-await, no-inline-comments, no-implicit-globals, no-undef, sonarjs/no-implicit-global
await=async() => c[c][c]("return this") // Normal Code

// eslint-disable-next-line id-length, no-implicit-globals, no-undef, sonarjs/no-implicit-global
().await=(f= function* f(a,b,c) {

  // eslint-disable-next-line no-undef, curly, no-param-reassign, unicorn/prefer-number-properties
  if (isObject(a)) a = NaN
  // eslint-disable-next-line no-undef, curly, no-param-reassign, unicorn/prefer-number-properties
  if (isObject(c)) c = NaN
  try{
    // eslint-disable-next-line no-undef, 10x-engineering/no-operators
    x(b==="+"||b==="-"||b==="*"||b==="/"||b==="%"||b==="**")
  }catch {
    // eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global
    up="invalid operator"

    // eslint-disable-next-line 10x-engineering/no-throw, no-undef
    throw up
  }

  // eslint-disable-next-line no-param-reassign, no-magic-numbers, unicorn/no-zero-fractions, 10x-engineering/no-number-literals
  a=0..constructor(a)
  // eslint-disable-next-line no-param-reassign, no-magic-numbers, unicorn/no-zero-fractions, 10x-engineering/no-number-literals
  c=0..constructor(c)

  // eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global, sonarjs/code-eval, no-eval, 10x-engineering/no-operators
  r=eval(a+b+c)
  // eslint-disable-next-line no-undef
  yield r
// eslint-disable-next-line no-implicit-globals, no-undef, sonarjs/no-implicit-global, func-names
}, o = f, f = function() {
  // eslint-disable-next-line unicorn/prefer-reflect-apply, prefer-spread, prefer-rest-params, unicorn/no-null, no-undef
  return o.apply(null, arguments).next().value
// eslint-disable-next-line no-undef
}, f)

// eslint-disable-next-line 10x-engineering/no-operators, no-undef
module.exports = await`` && await