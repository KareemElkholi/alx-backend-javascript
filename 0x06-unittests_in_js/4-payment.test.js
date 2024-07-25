const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi is the same as calculateNumber', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWith('The total is: 10')).to.be.true;
    spy.restore();
    stub.restore();
  });
});
