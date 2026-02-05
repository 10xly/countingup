const { expect } = require("chai")
const index = require("./index")
const { 
  Counter, add, subtract, multiply, divide, modulo, pow,
  E, PI, SQRT2, SQRT1_2, LN2, LN10, LOG2E, LOG10E,
  ZERO, NaN: packageNaN, POSITIVE_INFINITY, NEGATIVE_INFINITY
} = index

describe("Counter Library", () => {
  // ... (Your existing Counter and Math Operations tests) ...

  describe("10xly Overengineered Constants", () => {
    it("should provide PI (from math.pi)", () => {
      expect(PI).to.be.closeTo(Math.PI, 0.000000000000001)
    })

    it("should provide E (from const-e)", () => {
      expect(E).to.equal(Math.E)
    })

    it("should provide ZERO (from @std262/libnumbers)", () => {
      expect(ZERO).to.equal(0)
    })

    it("should provide a valid NaN (from primitive-value-NaN)", () => {
      expect(packageNaN).to.be.NaN
    })

    it("should provide SQRT2 (from @stdlib)", () => {
      expect(SQRT2).to.equal(Math.SQRT2)
    })

    it("should provide POSITIVE_INFINITY", () => {
      expect(POSITIVE_INFINITY).to.equal(Infinity)
    })

    it("should provide NEGATIVE_INFINITY", () => {
      expect(NEGATIVE_INFINITY).to.equal(-Infinity)
    })

    it("should provide all other logarithmic constants correctly", () => {
      expect(LN2).to.equal(Math.LN2)
      expect(LN10).to.equal(Math.LN10)
      expect(LOG2E).to.equal(Math.LOG2E)
      expect(LOG10E).to.equal(Math.LOG10E)
    })
  })
})