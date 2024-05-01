const calculateNumber = require('./0-calcul');
const assert = require('assert');

/* eslint no-undef: 0 */

describe('Function', function () {
  describe('Addition Calculation', function () {
    it('return a + b', function () {
      assert.equal(calculateNumber(1, 3), 4); 
      assert.equal(calculateNumber(6, 2), 8); 
      assert.equal(calculateNumber(0, 2), 2); 
    })
    it('a + round of b', function () {
      assert.equal(calculateNumber(1, 3.7), 5);
      assert.equal(calculateNumber(1, 3.2), 4);
      assert.equal(calculateNumber(2, 3.9), 6);
      assert.equal(calculateNumber(3, 3.1), 6);
    })
    it('round of a + round of b', function () {
      assert.equal(calculateNumber(1.2, 3.7), 5);
      assert.equal(calculateNumber(1.5, 3.1), 5);
      assert.equal(calculateNumber(1.4, 3.5), 5);
      assert.equal(calculateNumber(1.9, 5.7), 8);
    })
    it('a + round of b', function () {
      assert.equal(calculateNumber(0, 0.1), 0);
      assert.equal(calculateNumber(0, 3.7), 4);
      assert.equal(calculateNumber(4, 4.1), 8);
      assert.equal(calculateNumber(8, 1.1), 9);
    })
  })
})
