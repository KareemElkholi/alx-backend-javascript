const assert = require('assert');
const calculateNumber = require('./1-calcul');
describe('calculateNumber', () => {
  describe('SUM', () => {
    it('round up a', () => {
      assert.strictEqual(calculateNumber('SUM', 0.5, -1), 0);
    });
    it('round up b', () => {
      assert.strictEqual(calculateNumber('SUM', -2, 5.6), 4);
    });
    it('round down a', () => {
      assert.strictEqual(calculateNumber('SUM', 3.4, 2), 5);
    });
    it('round down b', () => {
      assert.strictEqual(calculateNumber('SUM', 5, 4.1), 9);
    });
    it('round up a and b', () => {
      assert.strictEqual(calculateNumber('SUM', 2.9, 4.7), 8);
    });
    it('round down a and b', () => {
      assert.strictEqual(calculateNumber('SUM', 2.2, 1.1), 3);
    });
    it('round up a and round down b', () => {
      assert.strictEqual(calculateNumber('SUM', 4.8, 1.3), 6);
    });
    it('round down a and round up b', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 4.7), 7);
    });
  });
  describe('SUBTRACT', () => {
    it('round up a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.5, -1), 2);
    });
    it('round up b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 5.6), -4);
    });
    it('round down a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.2, -8), 5);
    });
    it('round down b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 4.1), 1);
    });
    it('round up a and b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.9, 4.7), -1);
    });
    it('round down a and b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 2.1), 0);
    });
    it('round up a and round down b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.8, -1.1), 6);
    });
    it('round down a and round up b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, 4.7), -7);
    });
  });
  describe('DIVIDE', () => {
    it('round up a', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, 2), 4);
    });
    it('round up b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 4.6), 2);
    });
    it('round down a', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.2, -2), 1);
    });
    it('round down b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9, 3.1), -3);
    });
    it('round up a and b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.9, 1.7), 5);
    });
    it('round down a and b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.2, 2.1), 5);
    });
    it('round up a and round down b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 11.8, -4.1), -3);
    });
    it('round down a and round up b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -20.3, 1.7), -10);
    });
    it('divide by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 0.1), 'Error');
    });
  });
});
