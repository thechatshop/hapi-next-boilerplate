const server = require('./server');

server.events.on('start', () => {
	console.log('Server started');
});

Promise.resolve()
	.then(() => server.initialize())
	.then(() => server.start())
	.catch(err => console.log);
