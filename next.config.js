const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    apiWeatherKey: '6efe7a3954e41d023b4a18ddfd64c421',
  },
}
