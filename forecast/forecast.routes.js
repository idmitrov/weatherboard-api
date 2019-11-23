const Router = require('koa-router');
const forecastController = require('./forecast.controller');

module.exports = () => {
  const router = new Router();

  router.prefix('/forecast')
    .get('/weekly', forecastController.getWeekly);

  return router;
}
