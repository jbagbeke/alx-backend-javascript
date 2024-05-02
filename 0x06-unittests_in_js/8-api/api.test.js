const { expect } = require('chai')
// const axios = require('axios')
const request = require('request');

/* eslint no-undef: 0 */
describe('API TEST SUITE', () => {


    it('Test API response message', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            if (error) {
                console.error(`Error: ${error}`);
                return;
            }
            
            expect(body.slice(0, -1)).to.equal('Welcome to the payment system')
            expect(response.statusCode).to.equal(200);
            done();
        });
    })

    // it('Test API response message', (done) => {
    //     axios.get('http://127.0.0.1:7865').then((response) => {
    //         expect(response.data.slice(0, -1)).to.equal('Welcome to the payment system')
    //         expect(response.status).to.equal(200);
    //         done();       
    //     })
    // })
})
