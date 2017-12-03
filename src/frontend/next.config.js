const webpack = require('webpack');

module.exports = {
	webpack: (config, { buildId, dev }) => {
		return config;
	},
	webpackDevMiddleware: config => {
		// Perform customizations to webpack dev middleware config

		// Important: return the modified config
		return config;
	}
};
