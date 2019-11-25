const config = require('../config');
const axios = require('axios').default;

const BG_SOF_CITY_ID = 727011;

module.exports = {
  /**
   * Get weather forecast by calling Open Weather API
   * @name get
   * @param {Number|String} cityId
   * @param {String} units
   * @returns {Promise} data
   */
  get: async (cityId = BG_SOF_CITY_ID, units = 'metric') => {
    const endpoint = `${config.WEATHER_API_URL}?id=${cityId}&units=${units}&APPID=${config.WEAHTER_API_KEY}`;
    const response = await axios.get(endpoint);
    const data = response.data;

    return data;
  }
};
