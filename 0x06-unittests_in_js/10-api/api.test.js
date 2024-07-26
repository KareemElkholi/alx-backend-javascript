const { expect } = require('chai');
const request = require('request');
describe('api test', () => {
  it('GET /', (done) => {
    request.get('http://localhost:7865', (_error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
  it('GET /cart/:id with correct id', (done) => {
    request.get('http://localhost:7865/cart/8', (_error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 8');
      done();
    });
  });
  it('GET /cart/:id with incorrect id', (done) => {
    request.get('http://localhost:7865/cart/id', (_error, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
  it('GET /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (_error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
  it('POST /login', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'test' } }, (_error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome test');
      done();
    });
  });
});
