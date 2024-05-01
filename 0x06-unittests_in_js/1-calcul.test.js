const calculateNumber = require('./1-calcul')
const assert = require('assert')

/* eslint no-undef: 0 */

describe('Addition', function () {
  describe('ADDITION Calculation TEST', function () {
    it('return a + b', function () {
      assert.equal(calculateNumber('SUM', 1, 3), 4)
      assert.equal(calculateNumber('SUM', 6, 2), 8)
      assert.equal(calculateNumber('SUM', 0, 2), 2)
    })
    it('a + round of b', function () {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5)
      assert.equal(calculateNumber('SUM', 1, 3.2), 4)
      assert.equal(calculateNumber('SUM', 2, 3.9), 6)
      assert.equal(calculateNumber('SUM', 3, 3.1), 6)
    })
    it('round of a + round of b', function () {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5)
      assert.equal(calculateNumber('SUM', 1.5, 3.1), 5)
      assert.equal(calculateNumber('SUM', 1.4, 3.5), 5)
      assert.equal(calculateNumber('SUM', 1.9, 5.7), 8)
    })
    it('a + round of b', function () {
      assert.equal(calculateNumber('SUM', 0, 0.1), 0)
      assert.equal(calculateNumber('SUM', 0, 3.7), 4)
      assert.equal(calculateNumber('SUM', 4, 4.1), 8)
      assert.equal(calculateNumber('SUM', 8, 1.1), 9)
    })
  })
})

describe('Subtraction', function () {
  describe('SUBTRACTION Calculation TEST', function () {
    it('return a - b', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2)
      assert.equal(calculateNumber('SUBTRACT', 6, 2), 4)
      assert.equal(calculateNumber('SUBTRACT', 0, 2), -2)
    })
    it('a - round of b', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3)
      assert.equal(calculateNumber('SUBTRACT', 1, 3.2), -2)
      assert.equal(calculateNumber('SUBTRACT', 2, 3.9), -2)
      assert.equal(calculateNumber('SUBTRACT', 3, 3.1), 0)
    })
    it('round of a - round of b', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3)
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.1), -1)
      assert.equal(calculateNumber('SUBTRACT', 1.4, 3.5), -3)
      assert.equal(calculateNumber('SUBTRACT', 1.9, 5.7), -4)
    })
    it('a - round of b', function () {
      assert.equal(calculateNumber('SUBTRACT', 0, 0.1), 0)
      assert.equal(calculateNumber('SUBTRACT', 0, 3.7), -4)
      assert.equal(calculateNumber('SUBTRACT', 4, 4.1), 0)
      assert.equal(calculateNumber('SUBTRACT', 8, 1.1), 7)
    })
  })
})

describe('Division', function () {
  describe('DIVISION Calculation TEST', function () {
    it('return a / b', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 3), 0.33)
      assert.equal(calculateNumber('DIVIDE', 6, 2), 3.00)
      assert.equal(calculateNumber('DIVIDE', 0, 2), 'Error')
    })
    it('a / round of b', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25)
      assert.equal(calculateNumber('DIVIDE', 1, 3.2), 0.33)
      assert.equal(calculateNumber('DIVIDE', 2, 3.9), 0.50)
      assert.equal(calculateNumber('DIVIDE', 3, 3.1), 1.00)
    })
    it('round of a / round of b', function () {
      assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25)
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.1), 0.67)
      assert.equal(calculateNumber('DIVIDE', 1.4, 3.5), 0.25)
      assert.equal(calculateNumber('DIVIDE', 1.9, 5.7), 0.33)
    })
    it('a / round of b', function () {
      assert.equal(calculateNumber('DIVIDE', 0, 0.1), 'Error')
      assert.equal(calculateNumber('DIVIDE', 0, 3.7), 'Error')
      assert.equal(calculateNumber('DIVIDE', 4, 4.1), 1.00)
      assert.equal(calculateNumber('DIVIDE', 8, 1.1), 8.00)
    })
  })
})
