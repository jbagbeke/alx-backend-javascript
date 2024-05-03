const { expect } = require('chai')
const axios = require('axios')

/* eslint no-undef: 0 */
describe('API TEST SUITE - ENDPOINT /', () => {
    it('Test API response message', (done) => {
        axios.get('http://127.0.0.1:7865').then((response) => {
            expect(response.data).to.equal('Welcome to the payment system')
            expect(response.status).to.equal(200);
            done();       
        })
    })
})

describe('API TEST SUITE - ENDPOINT /cart/:id', () => {
    it('Test API endpoint /cart/123', (done) => {
        axios.get('http://127.0.0.1:7865/cart/123').then((response) => {
            expect(response.data).to.equal('Payment methods for cart 123')
            expect(response.status).to.equal(200);
            done();       
        })
    })
    
    it('Test API endpoint /cart/abc', (done) => {
        axios.get('http://127.0.0.1:7865/cart/abc').catch((error) => {
            expect(error.response.status).to.equal(404);
            done();
        })
    })
})
