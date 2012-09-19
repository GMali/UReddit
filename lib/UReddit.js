/**
 * UReddit.js
 *
 * API Wrapper for University of Reddit.
 *
 * For more information, check out README.md and package.json
 * 
 */

/**
 * Module dependency.
 */
var request = require('request');

/**
 * Url for the API.
 */
var API_URL = "http://ureddit.com/api?";

/**
 * Application Protoype
 */
var UReddit = module.exports = function UReddit(){};

/**
 * Returns a list of category ids.
 * Calls the sendRequest method.
 * 
 * @param  {Function} callback Function that receives the data in JSON format.
 */
UReddit.prototype.catalog = function( callback ){
  sendRequest("catalog", null, callback);
};

/**
 * Returns the category name and list of all ids of all classes in that
 * category.
 * Calls the sendRequest method.
 * 
 * @param  {String}   id       Takes in an id for the category.
 * @param  {Function} callback Function that receives the data in JSON format.
 */
UReddit.prototype.category = function( id, callback ){
  sendRequest("category", id, callback);
};

/**
 * Returns all class information, including the roster (a list of user ids),
 * lectures (a list of lecture ids), and teachers (a list of user ids).
 * Calls the sendRequest method.
 * 
 * @param  {String}   id       Takes in an id for the class.
 * @param  {Function} callback Function that receives the data in JSON format.
 */
UReddit.prototype.class = function( id, callback ){
  sendRequest("class", id, callback);
};

/**
 * Returns the lecture name and description and any associated links
 * (a list of link ids).
 * Calls the sendRequest method.
 * 
 * @param  {String}   id       Takes in an id for the lecture.
 * @param  {Function} callback Function that receives the data in JSON format.
 */
UReddit.prototype.lecture = function( id, callback ){
  sendRequest("lecture", id, callback);
};

/**
 * Returns the link title and URL.
 * Calls the sendRequest method.
 * 
 * @param  {String}   id       Takes in an id for the link.
 * @param  {Function} callback Function that receives the data in JSON format.
 */
UReddit.prototype.link = function( id, callback ){
  sendRequest("link", id, callback);
};

/**
 * Returns the user username, registration date, and schedule.
 * Calls the sendRequest method.
 * 
 * @param  {String}   id       Takes in an id for the user.
 * @param  {Function} callback Function that receives the data in JSON format.
 */
UReddit.prototype.user = function( id, callback ){
  sendRequest("user", id, callback);
};

/**
 * Generates an URL based on type and id, and makes a request to UReddit.com
 * If successful, calls the callback with the data{JSON} and error{null}.
 * Else, calls the callback with an error msg and null data.
 * 
 * @param  {String}   type     Type of data to be requested.
 * @param  {String}   id       Takes in an id for the Type.
 * @param  {Function} callback Callback that takes in {Error} and {JSON}.
 */
function sendRequest( type, id, callback ){
  var url = API_URL + '&type=' + type + '&id=' + id;
  
  // response.statusCode is always 200. The service fails at some URLs
  // Example: http://ureddit.com/api?type=class&id=23464
  request( url, function ( error, response, body ) {
    try{
      var data = JSON.parse(body);
      if(data.hasOwnProperty('error'))
        callback(new Error("Incorrect id or type."), null);
      else
        callback(null, data);
    }catch( error ){
      var customError = "Unable to parse JSON. Contact the developer.";
      callback(new Error(customError), null);
    }
  });

};