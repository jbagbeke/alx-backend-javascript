const sinon = require('sinon')
const { expect } = require('chai')
const Utils = require('./utils')

const sendPaymentRequestToApi = require('./3-payment')
const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber')

/* eslint no-undef: 0 */
describe('Sinon Spy Test on Utils.calculateNumber', function() {
    describe('CalculateNumber Test', function() {
        it('call calculateNumber with correct args', function() {
            sendPaymentRequestToApi(100, 20)
            expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true
            calculateNumberSpy.restore()
        })
    })
})