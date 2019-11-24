const forecastService = require('./forecast.service');

module.exports = {
  getWeekly: async (ctx) => {
    const forecastData = await forecastService.get();

    ctx.state.data = forecastData;
  }
};
