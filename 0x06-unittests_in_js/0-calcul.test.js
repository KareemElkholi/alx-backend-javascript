const assert = require('assert');
const calculateNumber = require('./0-calcul');
describe('calculateNumber', () => {
  it('round up a', () => {
    assert.strictEqual(calculateNumber(0.5, 1), 2);
  });
  it('round up b', () => {
    assert.strictEqual(calculateNumber(2, 1.6), 4);
  });
  it('round down a', () => {
    assert.strictEqual(calculateNumber(3.4, 2), 5);
  });
  it('round down b', () => {
    assert.strictEqual(calculateNumber(5, 4.1), 9);
  });
  it('round up a and b', () => {
    assert.strictEqual(calculateNumber(2.9, 4.7), 8);
  });
  it('round down a and b', () => {
    assert.strictEqual(calculateNumber(2.2, 1.1), 3);
  });
  it('round up a and round down b', () => {
    assert.strictEqual(calculateNumber(4.8, 1.3), 6);
  });
  it('round down a and round up b', () => {
    assert.strictEqual(calculateNumber(2.3, 4.7), 7);
  });
});
