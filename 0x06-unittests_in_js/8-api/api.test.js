const { expect } = require('chai')
const axios = require('axios')

/* eslint no-undef: 0 */
describe('API TEST SUITE', () => {
    it('Test API response message', (done) => {
        axios.get('http://127.0.0.1:7865').then((response) => {
            expect(response.data).to.equal('Welcome to the payment system')
            expect(response.status).to.equal(200);
            done();       
        })
    })
})
