const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => { spy = sinon.spy(console, 'log'); });
  afterEach(() => { spy.restore(); });
  it('test with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('The total is: 120')).to.be.true;
  });
  it('test with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
