// index.js will require and run out main fetch functions


const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP('24.80.37.213', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates);
});

const longLat = { latitude: 49.29270935058594, longitude: -123.04773712158203 };

fetchISSFlyOverTimes(longLat, (error, passTimes) => {
  if (error) {
    console.log("it didnt work!", error);
    return;

  }
  console.log("it worked! returned risetime and duration:", passTimes);
});

