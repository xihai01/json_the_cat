//import request library
const request = require('request');
//store the API endpoint/URL
const API_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

//request API server for data
const fetchBreedDescription = function(breed, callback) {
  request(API_URL + breed, (error, response, body) => {
    //check for any request errors before preceeding
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    //in the event breed is not found
    if (data.length === 0) {
      //set error to true
      error = true;
      callback(error, null);
      return;
    }
    //fetch the description
    const desc = data[0].description;
    callback(error, desc);
  });
};

//export modules
module.exports = { fetchBreedDescription };