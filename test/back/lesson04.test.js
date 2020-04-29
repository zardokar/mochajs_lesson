const assert = require('assert')

const {proveType} = require('../../lib/lesson04')


describe('Test Function proveType', function() {

    it('Check number', function() {
        assert.equal(true, proveType('number',5) )
    })

    it('Check string', function() {
        assert.equal(true, proveType('string','Hello') )
    })

    it('Check boolean', function() {
        assert.equal(true, proveType('boolean',true) )
    })

    it('Check number when value is string', function() {
        assert.equal(false, proveType('number','Hello') )
    })

    it('Check number when value is boolean', function() {
        assert.equal(false, proveType('number',true) )
    })

    it('Check string when value is number', function() {
        assert.equal(false, proveType('string',5) )
    })

    it('Check string when value is boolean', function() {
        assert.equal(false, proveType('string',true) )
    })

    it('Check number when value is Array', function() {
        assert.equal(false, proveType('number',[0,0]) )
    })

    it('Check string when value is Array', function() {
        assert.equal(false, proveType('string',[0,0]) )
    })

    it('Check boolean when value is Array', function() {
        assert.equal(false, proveType('boolean',[0,0]) )
    })

    it('Check boolean when value is Empty Array', function() {
        assert.equal(false, proveType('boolean',[]) )
    })

    it('Check number when value is JSON Object', function() {
        assert.equal(false, proveType('number',{}) )
    })

    it('Check string when value is JSON Object', function() {
        assert.equal(false, proveType('string',{}) )
    })

    it('Check boolean when value is JSON Object', function() {
        assert.equal(false, proveType('boolean',{}) )
    })


})