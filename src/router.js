const Router = require('koa-router');
const { API_BASE_URL } = require('./config');

const forecastRoutes = require('./forecast/forecast.routes');

const combineRouters = () => {
  const router = new Router();

  router.use(forecastRoutes().routes());

  return router;
};

module.exports = () => {
  const router = new Router();

  router.use(API_BASE_URL, combineRouters().routes());

  return router
};
