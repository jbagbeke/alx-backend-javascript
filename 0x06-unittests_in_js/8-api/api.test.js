const { expect } = require('chai')
const axios = require('axios')

/* eslint no-undef: 0 */
describe('API TEST SUITE', () => {
    let response;

    beforeEach(async () => {
        await axios.get('http://127.0.0.1:7865').then((res) => {
            response = res
        }).catch((error) => {
            console.log(error)
        })
    })

    afterEach(() => {
        response = '';
    })

    it('Test API response message', () => {
        expect(response.data.slice(0, -1)).to.equal('Welcome to the payment system')
    })

    it('Test API response Status Code', () => {
        expect(response.status).to.equal(200)
    })
})
