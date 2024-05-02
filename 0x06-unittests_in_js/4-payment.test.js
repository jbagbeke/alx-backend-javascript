const sinon = require('sinon')
const { expect } = require('chai')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')

const consoleSpy = sinon.spy(console, 'log')


/* eslint no-undef: 0 */
describe('Sinon Stub Test on Utils.calculateNumber', function() {
    describe('CalculateNumber Test', function() {
        let calculateNumberStub;

        this.beforeEach(() => {
            calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10)
        })

        this.afterEach(() => {
            calculateNumberStub.restore()
        })

        it('stubs calculateNumber to return 10', function() {
            sendPaymentRequestToApi(100, 20)
            expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true
            expect(consoleSpy.calledWith('The total is: 10')).to.be.true
        })
    })
})