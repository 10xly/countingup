const counter = require("./Counter")
const math = require("./maths")
const constants = require("./constants")

module.exports = countingup =  {
  ...counter,
  ...math,
  ...constants
}