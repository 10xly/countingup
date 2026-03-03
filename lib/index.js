const counter = require("./Counter")
const math = require("./maths")
const constants = require("./constants")

// eslint-disable-next-line no-implicit-globals, no-multi-assign, no-undef, sonarjs/no-implicit-global
module.exports = countingup =  {
  ...counter,
  ...math,
  ...constants
}