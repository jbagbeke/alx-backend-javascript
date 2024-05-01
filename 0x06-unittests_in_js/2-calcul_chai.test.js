const calculateNumber = require('./2-calcul_chai')
const { expect } = require('chai')

/* eslint no-undef: 0 */

describe('Addition', function () {
  describe('ADDITION Calculation TEST', function () {
    it('return a + b', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4)
      expect(calculateNumber('SUM', 6, 2)).to.equal(8)
      expect(calculateNumber('SUM', 0, 2)).to.equal(2)
    })
    it('a + round of b', function () {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5)
      expect(calculateNumber('SUM', 1, 3.2)).to.equal(4)
      expect(calculateNumber('SUM', 2, 3.9)).to.equal(6)
      expect(calculateNumber('SUM', 3, 3.1)).to.equal(6)
    })
    it('round of a + round of b', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5)
      expect(calculateNumber('SUM', 1.5, 3.1)).to.equal(5)
      expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5)
      expect(calculateNumber('SUM', 1.9, 5.7)).to.equal(8)
    })
    it('a + round of b', function () {
      expect(calculateNumber('SUM', 0, 0.1)).to.equal(0)
      expect(calculateNumber('SUM', 0, 3.7)).to.equal(4)
      expect(calculateNumber('SUM', 4, 4.1)).to.equal(8)
      expect(calculateNumber('SUM', 8, 1.1)).to.equal(9)
    })
  })
})

describe('Subtraction', function () {
  describe('SUBTRACTION Calculation TEST', function () {
    it('return a - b', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2)
      expect(calculateNumber('SUBTRACT', 6, 2)).to.equal(4)
      expect(calculateNumber('SUBTRACT', 0, 2)).to.equal(-2)
    })
    it('a - round of b', function () {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3)
      expect(calculateNumber('SUBTRACT', 1, 3.2)).to.equal(-2)
      expect(calculateNumber('SUBTRACT', 2, 3.9)).to.equal(-2)
      expect(calculateNumber('SUBTRACT', 3, 3.1)).to.equal(0)
    })
    it('round of a - round of b', function () {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3)
      expect(calculateNumber('SUBTRACT', 1.5, 3.1)).to.equal(-1)
      expect(calculateNumber('SUBTRACT', 1.4, 3.5)).to.equal(-3)
      expect(calculateNumber('SUBTRACT', 1.9, 5.7)).to.equal(-4)
    })
    it('a - round of b', function () {
      expect(calculateNumber('SUBTRACT', 0, 0.1)).to.equal(0)
      expect(calculateNumber('SUBTRACT', 0, 3.7)).to.equal(-4)
      expect(calculateNumber('SUBTRACT', 4, 4.1)).to.equal(0)
      expect(calculateNumber('SUBTRACT', 8, 1.1)).to.equal(7)
    })
  })
})

describe('Division', function () {
  describe('DIVISION Calculation TEST', function () {
    it('return a / b', function () {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.33)
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3.00)
      expect(calculateNumber('DIVIDE', 0, 2)).to.equal('Error')
    })
    it('a / round of b', function () {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25)
      expect(calculateNumber('DIVIDE', 1, 3.2)).to.equal(0.33)
      expect(calculateNumber('DIVIDE', 2, 3.9)).to.equal(0.50)
      expect(calculateNumber('DIVIDE', 3, 3.1)).to.equal(1.00)
    })
    it('round of a / round of b', function () {
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25)
      expect(calculateNumber('DIVIDE', 1.5, 3.1)).to.equal(0.67)
      expect(calculateNumber('DIVIDE', 1.4, 3.5)).to.equal(0.25)
      expect(calculateNumber('DIVIDE', 1.9, 5.7)).to.equal(0.33)
    })
    it('a / round of b', function () {
      expect(calculateNumber('DIVIDE', 0, 0.1)).to.equal('Error')
      expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal('Error')
      expect(calculateNumber('DIVIDE', 4, 4.1)).to.equal(1.00)
      expect(calculateNumber('DIVIDE', 8, 1.1)).to.equal(8.00)
    })
  })
})
