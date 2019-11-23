const cache = require('koa-cache-lite');
const config = require('./config');

module.exports = () => {
  const oneMinute = 1000 * 60;
  const cacheTime = oneMinute * 100000;
  const cachedRoutes = {
    [`${config.API_BASE_URL}/weather`]: cacheTime
  };

  const options = {
    debug: config.API_ENV === 'dev',
    keyFragment: 'cache',
    ignoreNoCache: true
  };

  return cache.configure({ ...cachedRoutes }, options);
};
