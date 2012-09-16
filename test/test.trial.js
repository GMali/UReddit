var should  = require('should');
var UReddit = require('../lib/uReddit.js')

var uni = new UReddit();

describe('UReddit', function() {
	it('should have a catalog', function(done) {
		uni.catalog(function(data){
			should.exist(data);
			// done();
		});
	});
	it('should have a category', function(done) {
		uni.category("23442", function(data){
			should.exist(data);
			// done();
		});
	});
	it('should have a class', function(done) {
		uni.class("23464", function(data){
			should.exist(data);
			// done();
		});
	});
	it('should have a lecture', function(done) {
		uni.lecture("23464", function(data){
			should.exist(data);
			// done();
		});
	});
	it('should have a link', function(done) {
		uni.link("23464", function(data){
			should.exist(data);
			// done();
		});
	});
	it('should have a user', function(done) {
		uni.user("8", function(data){
			should.exist(data);
			// done();
		});
	});
});
