const hapi = require('hapi');

const server = new hapi.Server({
	port: process.env.PORT || process.env.WEBSITES_PORT || 3000
});

const frontendPlugin = require('./frontend');
const authenticatePlugin = require('./authenticate');

server.register([authenticatePlugin, frontendPlugin]);

module.exports = server;
