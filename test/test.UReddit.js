var should  = require('should');
var UReddit = require('../lib/UReddit.js')

var uni = new UReddit();

describe('UReddit', function() {
  it('should have a catalog', function(done) {
    uni.catalog(function(error, data){
      should.exist(data);
      should.not.exist(error);
      done();
    });
  });

/* 
  // Can be used when UReddit fixes their API first.
  it('should specify error for incorrect parameters', function(done) {
    uni.catalog(function(error, data){
      should.exist(data);
      should.not.exist(error);
      done();
    });
  });
*/

  it('should have a category', function(done) {
    uni.category("23442", function(error, data){
      should.exist(data);
      done();
    });
  });
  
  it('should have a class', function(done) {
    uni.class("23466", function(error, data){
      should.exist(data);
      should.not.exist(error);
      done();
    });
  });
  
  it('should handle an incorrect response', function(done){
    uni.class("23464", function(error, data){
      should.exist(error);            
      should.not.exist(data);
      done();
    })
  });
  
  it('should have a lecture', function(done) {
    uni.lecture("23464", function(error, data){
      should.exist(data);
      should.not.exist(error);
      done();
    });
  });

  it('should have a link', function(done) {
    uni.link("23464", function(error, data){
      should.exist(data);
      should.not.exist(error);
      done();
    });
  });

  it('should have a user', function(error, done) {
    uni.user("9", function(error, data){
      should.exist(data);
      should.not.exist(error);
      done();
    });
  });

})