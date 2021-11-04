//import fetch function
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: The entered breed cannot be found');
  } else {
    console.log(desc);
  }
});