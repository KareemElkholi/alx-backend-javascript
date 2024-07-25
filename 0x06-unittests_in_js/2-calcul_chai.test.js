const { expect } = require('chai');
const calculateNumber = require('./1-calcul');
describe('calculateNumber', () => {
  describe('SUM', () => {
    it('round up a', () => {
      expect(calculateNumber('SUM', 0.5, -1)).to.be.equal(0);
    });
    it('round up b', () => {
      expect(calculateNumber('SUM', -2, 5.6)).to.be.equal(4);
    });
    it('round down a', () => {
      expect(calculateNumber('SUM', 3.4, 2)).to.be.equal(5);
    });
    it('round down b', () => {
      expect(calculateNumber('SUM', 5, 4.1)).to.be.equal(9);
    });
    it('round up a and b', () => {
      expect(calculateNumber('SUM', 2.9, 4.7)).to.be.equal(8);
    });
    it('round down a and b', () => {
      expect(calculateNumber('SUM', 2.2, 1.1)).to.be.equal(3);
    });
    it('round up a and round down b', () => {
      expect(calculateNumber('SUM', 4.8, 1.3)).to.be.equal(6);
    });
    it('round down a and round up b', () => {
      expect(calculateNumber('SUM', 2.3, 4.7)).to.be.equal(7);
    });
  });
  describe('SUBTRACT', () => {
    it('round up a', () => {
      expect(calculateNumber('SUBTRACT', 0.5, -1)).to.be.equal(2);
    });
    it('round up b', () => {
      expect(calculateNumber('SUBTRACT', 2, 5.6)).to.be.equal(-4);
    });
    it('round down a', () => {
      expect(calculateNumber('SUBTRACT', -3.2, -8)).to.be.equal(5);
    });
    it('round down b', () => {
      expect(calculateNumber('SUBTRACT', 5, 4.1)).to.be.equal(1);
    });
    it('round up a and b', () => {
      expect(calculateNumber('SUBTRACT', 3.9, 4.7)).to.be.equal(-1);
    });
    it('round down a and b', () => {
      expect(calculateNumber('SUBTRACT', 2.2, 2.1)).to.be.equal(0);
    });
    it('round up a and round down b', () => {
      expect(calculateNumber('SUBTRACT', 4.8, -1.1)).to.be.equal(6);
    });
    it('round down a and round up b', () => {
      expect(calculateNumber('SUBTRACT', -2.3, 4.7)).to.be.equal(-7);
    });
  });
  describe('DIVIDE', () => {
    it('round up a', () => {
      expect(calculateNumber('DIVIDE', 7.5, 2)).to.be.equal(4);
    });
    it('round up b', () => {
      expect(calculateNumber('DIVIDE', 10, 4.6)).to.be.equal(2);
    });
    it('round down a', () => {
      expect(calculateNumber('DIVIDE', -2.2, -2)).to.be.equal(1);
    });
    it('round down b', () => {
      expect(calculateNumber('DIVIDE', -9, 3.1)).to.be.equal(-3);
    });
    it('round up a and b', () => {
      expect(calculateNumber('DIVIDE', 9.9, 1.7)).to.be.equal(5);
    });
    it('round down a and b', () => {
      expect(calculateNumber('DIVIDE', 10.2, 2.1)).to.be.equal(5);
    });
    it('round up a and round down b', () => {
      expect(calculateNumber('DIVIDE', 11.8, -4.1)).to.be.equal(-3);
    });
    it('round down a and round up b', () => {
      expect(calculateNumber('DIVIDE', -20.3, 1.7)).to.be.equal(-10);
    });
    it('divide by 0', () => {
      expect(calculateNumber('DIVIDE', 8, 0.1)).to.be.equal('Error');
    });
  });
});
