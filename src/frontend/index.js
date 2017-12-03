const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, dir: path.resolve(__dirname) });
const buildPage = app.getRequestHandler();

const handler = async (request, h) => {
	const { url } = request;
	const { req, res } = request.raw;

	await buildPage(req, res, url);

	return h.close;
};

const plugin = {
	name: 'frontend',
	register(server, options) {
		console.log(server.realm.plugin);
		app.prepare();

		server.route({
			method: 'GET',
			path: '/{p*}',
			handler
		});
	}
};

module.exports = plugin;
