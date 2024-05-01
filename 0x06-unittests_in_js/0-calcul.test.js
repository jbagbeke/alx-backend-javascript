const calculateNumber = require('./0-calcul')
const assert = require('assert')

/* eslint no-undef: 0 */

describe('Function', function () {
  describe('Addition Calculation', function () {
    it('should return ceil of addition', function () {
      assert.equal(calculateNumber(1, 3), 4)
    })
    it('should return ceil of addition', function () {
      assert.equal(calculateNumber(1, 3.7), 5)
    })
    it('should return ceil of addition', function () {
      assert.equal(calculateNumber(1.2, 3.7), 5)
    })
    it('should return ceil of addition', function () {
      assert.equal(calculateNumber(1.5, 3.7), 6)
    })
    it('should return ceil of addition', function () {
      assert.equal(calculateNumber(0, 0.1), 1)
    })
  })
})
