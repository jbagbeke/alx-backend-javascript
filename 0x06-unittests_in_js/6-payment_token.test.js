const { expect } = require('chai')
const getPaymentTokenFromAPI = require('./6-payment_token')

/* eslint no-undef: 0 */
describe('getPaymentTokenFromAPI', () => {
    it('awaits for promise evaluation using done()', (done) => {
        getPaymentTokenFromAPI(true).then((result) => {
            expect(result.data).to.deep.equal('Successful response from the API');
            done();
        }).catch(done);
    })
})