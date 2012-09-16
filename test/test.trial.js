var mocha  = require('mocha');
var should = require('should');
var Bar    = require('../lib/uReddit.js').Bar
var def    = require('../lib/uReddit.js').defaults


describe('Testing Bar', function() {
	
	describe('Default', function() {
		it('should have a property ID', function() {
			def.should.have.property('id');
		});

		it('should say hey', function(){
			var foo = Bar();
			foo.should.equal("hey");
		});
	});
});