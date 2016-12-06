const axios = require ('axios');

const API_KEY = '&APPID=82147d7b63a767243256f97f9f0af641';
const currentEndpoint = 'http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate' + API_KEY;
const fiveDayEndpoint = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate' + API_KEY + '&cnt=5';

const helpers = {
  getCurrentWeather: function (location) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&type=accurate' + API_KEY)
      .then(function (forecast) {
        return forecast.data
      }).catch(function (err) {
        console.warn('Error in getCurrentWeather', err)
      })
  },
  getFiveDay: function (location) {
    const url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate' + API_KEY + '&cnt=5'
    console.log(url);
    return axios.get(url)
      .then(function (forecast) {
        return forecast.data
        console.log(forecast.data)
      }).catch(function (err) {
        console.warn('Error in getCurrentWeather', err)
      })
  }
}

module.exports = helpers;


//http://api.openweathermap.org/data/2.5/forecast/daily?q=undefined&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=5
