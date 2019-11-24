const Koa = require('koa');
const router = require('./router');
const cache = require('./cache');

const httpResponseMiddleware = async (ctx, next) => {
  await next(ctx);

  const { data, errors } = ctx.state;

  if (errors && errors.length) {
    ctx.response.body = { data: null, errors };
  } else if (data) {
    ctx.response.body = { data, errors: [] };
  }
}

module.exports = {
	/**
	 * Run the API on a given Host and Port
	 * @name run
	 * @param {Number|String} port The port to use (default=5000)
	 * @param {String} host The host to use (default=localhost)
	 */
  run(port = 5000, host = 'localhost') {
    const api = new Koa();
    const apiRouter = router();

    api
      .use(cache().middleware())
      .use(httpResponseMiddleware)
      .use(apiRouter.allowedMethods())
      .use(apiRouter.routes());

    api.on('error', (err) => {
      console.error(err);
    });

    api.listen(port, host);
  }
}
