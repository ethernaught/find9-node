const datagram = require('dgram');

const { version } = require('../package.json');

console.log('Package version:', version);

exports.client = (user = '', password = '', host, port) => {






	/*
	const socket = datagram.createSocket('udp4'); // or 'udp6'

	socket.on('message', (msg, rinfo) => {
		console.log(`Received: ${msg} from ${rinfo.address}:${rinfo.port}`);
	});

	socket.bind(41234, () => {
		console.log('Listening on UDP port 41234');
	});

	// Sending data
	socket.send('Hello, UDP', 41234, 'localhost', (err) => {
		if(err){
			console.error(err);
		}
	});
	*/
};

exports.version = () => {
	return version;
};

