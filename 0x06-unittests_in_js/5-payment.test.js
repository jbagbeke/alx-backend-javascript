const sinon = require('sinon')
const { expect } = require('chai')
const sendPaymentRequestToApi = require('./4-payment')


/* eslint no-undef: 0 */
describe('Hook Test on SendPaymentRequestToAPI', function() {
    describe('API Test - Hook 1', () => {
        let consoleSpy;
        
        this.beforeEach(() => {
            consoleSpy = sinon.spy(console, 'log')
        })

        this.afterEach(() => {
            consoleSpy.restore()
        })

        it('call sendPaymentRequestToAPI with 100, and 20', () => {
            sendPaymentRequestToApi(100, 20)
            expect(consoleSpy.calledWith('The total is: 120')).to.be.true
            expect(consoleSpy.calledOnce).to.be.true
        })

        it('call sendPaymentRequestToAPI with 10 and 10', () => {
            sendPaymentRequestToApi(10, 10)
            expect(consoleSpy.calledWith('The total is: 20')).to.be.true
            expect(consoleSpy.calledOnce).to.be.true
        })
    })
})