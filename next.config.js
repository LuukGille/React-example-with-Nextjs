const path = require('path');
require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    apiWeatherKey: process.env.REACT_APP_WEATHER_API_KEY,
  },
}
