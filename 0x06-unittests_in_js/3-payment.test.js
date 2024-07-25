const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi is the same as calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
