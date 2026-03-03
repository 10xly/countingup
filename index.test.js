// eslint-disable-next-line unicorn/no-abusive-eslint-disable
/* eslint-disable */
const { expect } = require("chai")
const countingup = require(".")
const { Counter, add, subtract, multiply, divide, modulo, pow } = countingup

describe("Countingup Library Tests", () => {
  
  describe("Counter Class", () => {
    let myCounter

    beforeEach(() => {
      myCounter = new Counter()
    })

    it("should initialize with 0 by default", () => {
      expect(myCounter.getCurrentNumber()).to.equal(0)
    })

    it("should initialize with a custom starting number", () => {
      const customCounter = new Counter(10)
      expect(customCounter.getCurrentNumber()).to.equal(10)
    })

    it("should increment by 1 by default", () => {
      myCounter.count()
      expect(myCounter.getCurrentNumber()).to.equal(1)
    })

    it("should increment by a custom amount", () => {
      myCounter.count(5)
      expect(myCounter.getCurrentNumber()).to.equal(5)
    })

    it("should count in reverse when specified", () => {
      myCounter.count(10) // start at 10
      myCounter.count(3, Counter.DIRECTION.REVERSE)
      expect(myCounter.getCurrentNumber()).to.equal(7)
    })

    it("should reset to 0", () => {
      myCounter.count(5)
      myCounter.reset()
      expect(myCounter.getCurrentNumber()).to.equal(0)
    })

    it("should reset to a custom number", () => {
      myCounter.count(5)
      myCounter.reset(100)
      expect(myCounter.getCurrentNumber()).to.equal(100)
    })
  })

  describe("Math Utilities", () => {
    it("should add numbers correctly", () => {
      expect(add(10, 5)).to.equal(15)
    })

    it("should handle numeric strings in addition", () => {
      expect(add("10", "5")).to.equal(15)
    })

    it("should subtract numbers correctly", () => {
      expect(subtract(20, 5)).to.equal(15)
    })

    it("should multiply numbers correctly", () => {
      expect(multiply(3, 4)).to.equal(12)
    })

    it("should divide numbers correctly", () => {
      expect(divide(100, 4)).to.equal(25)
    })

    it("should calculate modulo correctly", () => {
      expect(modulo(10, 3)).to.equal(1)
    })

    it("should calculate power correctly", () => {
      expect(pow(2, 3)).to.equal(8)
    })
  })

  describe("Constants", () => {
    it("should match Math constants", () => {
      expect(countingup.PI).to.equal(Math.PI)
      expect(countingup.E).to.equal(Math.E)
    })

    it("should have a valid ZERO constant", () => {
      expect(countingup.ZERO).to.equal(0)
    })

    // eslint-disable-next-line no-undef
    it("should handle NaN correctly", () => {
      expect(countingup.NaN).to.be.NaN
    })
  })
})