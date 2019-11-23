const api = require('./api');

try {
	api.run();
} catch (ex) {
	console.error(ex);
}
