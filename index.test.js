const { expect } = require("chai")
const { Counter, add, subtract, multiply, divide, modulo, pow } = require("./index")

describe("Counter Library", () => {
  let counter

  beforeEach(() => {
    counter = new Counter(10)
  })

  describe("Initialization", () => {
    it("should initialize with a base value", () => {
      expect(counter.getCurrentNumber()).to.equal(10)
    })

    it("should default to 0 if no base is provided or is invalid", () => {
      const defaultCounter = new Counter()
      const invalidCounter = new Counter("invalid")
      expect(defaultCounter.getCurrentNumber()).to.equal(0)
      expect(invalidCounter.getCurrentNumber()).to.equal(0)
    })
  })

  describe("Counting Logic", () => {
    it("should increment by 1 when count is called with no arguments", () => {
      counter.count()
      expect(counter.getCurrentNumber()).to.equal(11)
    })

    it("should increment by a specific amount in FORWARDS direction", () => {
      counter.count(5, Counter.DIRECTION.FORWARDS)
      expect(counter.getCurrentNumber()).to.equal(15)
    })

    it("should decrement by a specific amount in REVERSE direction", () => {
      counter.count(5, Counter.DIRECTION.REVERSE)
      expect(counter.getCurrentNumber()).to.equal(5)
    })
  })

  describe("Reset Functionality", () => {
    it("should reset the counter to a new base value", () => {
      counter.reset(50)
      expect(counter.getCurrentNumber()).to.equal(50)
    })

    it("should return \"this\" to allow chaining", () => {
      const result = counter.reset(5)
      expect(result).to.equal(counter)
    })
  })

  describe("Error Handling (Throws)", () => {
    it("should throw an error for non-integer increments", () => {
      expect(() => {
        counter.count(1.5)
      }).to.throw("Invalid increment")
    })

    it("should throw an error for non-finite increments", () => {
      expect(() => {
        counter.count(Infinity)
      }).to.throw("Invalid increment")
    })

    it("should throw an error for invalid directions", () => {
      expect(() => {
        counter.count(1, "INVALID_DIR")
      }).to.throw("Invalid direction")
    })

    it("should not change the counter value if an error is thrown", () => {
      try {
        counter.count(1.5)
      } catch (e) {
        // Error expected
      }
      expect(counter.getCurrentNumber()).to.equal(10)
    })
  })

  describe("Math Operations", () => {
    it("should correctly add two numbers", () => {
      expect(add(15, 25)).to.equal(40)
    })

    it("should correctly subtract two numbers", () => {
      expect(subtract(100, 42)).to.equal(58)
    })

    it("should correctly multiply two numbers", () => {
      expect(multiply(6, 7)).to.equal(42)
    })

    it("should correctly divide two numbers", () => {
      expect(divide(50, 2)).to.equal(25)
    })

    it("should correctly calculate the modulo", () => {
      expect(modulo(10, 3)).to.equal(1)
    })

    it("should correctly calculate exponentiation (pow)", () => {
      expect(pow(2, 3)).to.equal(8)
    })

    it("should handle strings by casting them via the 0..constructor trick", () => {
      expect(pow("5", "2")).to.equal(25)
    })
  })
})