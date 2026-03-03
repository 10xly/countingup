/* eslint-disable ninja/no-ts */
// eslint-disable-next-line id-length
exports.E = require("const-e")
// eslint-disable-next-line capitalized-comments, no-inline-comments
exports.PI = require("math.pi") // this evals 1,000,000 decimals of pi
exports.SQRT2 = require("@stdlib/constants-float64-sqrt-two")
exports.SQRT1_2 = require("const-sqrt-half")
exports.LN2 = require("const-ln2")
exports.LN10 = require("const-ln10")
exports.LOG2E = require("const-log2e")
exports.LOG10E = require("const-log10e")

// eslint-disable-next-line new-cap
exports.ZERO = require("@std262/libnumbers").Zero()
exports.NaN = require("primitive-value-nan")
exports.POSITIVE_INFINITY = require("infinities").positiveInfinity()
exports.NEGATIVE_INFINITY = require("infinities").negativeInfinity()