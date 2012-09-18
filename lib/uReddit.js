/**
 * UReddit.js
 *
 * API Wrapper for University of Reddit.
 *
 * @author: Gaurav Mali <hello@gauravmali.com>
 */

var request = require('request');


function UReddit(){

	// API URL.
	// Is it all caps lock for constants? 
	this.APIURL = "http://ureddit.com/api?";

	// Something tells me private functions are not cool in Javascript. 
	// But I don't want client to call these methods.
	// So is it a good practice to leave them as private functions?

	// Takes in parameters and returns an URL
	this.urlify = function(parameters){
		var urlString = this.APIURL;
		for(var key in parameters){
			urlString += '&' + key + '=' + parameters[key];
		}
		return urlString;
	};

	// Gets the data from UReddit's web service
	this.sendRequest = function(type, id, callback){
		var parameters = {
			type: type
			, id: id
		};

		var url = this.urlify(parameters);
	  
	  // It always returns 200.
		request(url, function (error, response, body) {
		  var data = JSON.parse(body);
		  callback(data);
		});

	};

};

UReddit.prototype.catalog = function(callback){
	this.sendRequest("catalog", null, callback);
};

UReddit.prototype.category = function(id, callback){
	this.sendRequest("category", id, callback);
};

UReddit.prototype.class = function(id, callback){
	this.sendRequest("class", id, callback);
};

UReddit.prototype.lecture = function(id, callback){
	this.sendRequest("lecture", id, callback);
};

UReddit.prototype.link = function(id, callback){
	this.sendRequest("link", id, callback);
};

UReddit.prototype.user = function(id, callback){
	this.sendRequest("user", id, callback);
};

// Export this module!
module.exports = UReddit;