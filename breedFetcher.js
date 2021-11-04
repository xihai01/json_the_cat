//import request library
const request = require('request');
//store the API endpoint/URL
const API_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

//request API server for data
const fetchBreedDescription = function(breed) {
  request(API_URL + breed, (error, response, body) => {
    //check for any request errors before preceeding
    if (error) {
      console.error(error.code + `: SOmething went wrong with the URL request`);
      return;
    }
    const data = JSON.parse(body);
    //in the event breed is not found
    if (data.length === 0) {
      console.log('Breed not found');
      return;
    }
    //fetch the description
    const desc = data[0].description;
    console.log(desc);
  });
};

//parse CLI args
const args = process.argv.slice(2);
let breed = args[0];
fetchBreedDescription(breed);