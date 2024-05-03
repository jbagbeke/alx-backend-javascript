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

describe('API TEST SUITE - ENDPOINT /login', () => {
    it('Test API endpoint /login with valid data', (done) => {
        axios.post('http://127.0.0.1:7865/login', { userName: 'Holberton' }).then((response) => {
            expect(response.data).to.equal('Welcome Holberton')
            expect(response.status).to.equal(200);
            done();       
        })
    })
})

describe('API TEST SUITE - ENDPOINT /available_payments', () => {
    it('Test API endpoint response msg /available_payments', (done) => {
        axios.get('http://127.0.0.1:7865/available_payments').then((response) => {
            expect(response.data.payment_methods).to.deep.equal({ credit_cards: true, paypal: false })
            expect(response.status).to.equal(200);
            done();       
        })
    })
    
    it('Test API endpoint with typo /available_payments', (done) => {
        axios.get('http://127.0.0.1:7865/available_paymentss').catch((error) => {
            expect(error.response.status).to.equal(404);
            done();
        })
    })
})
