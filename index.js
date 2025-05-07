const datagram = require('dgram');

exports.client = (token, host, port) => {
	const socket = datagram.createSocket('udp4'); // or 'udp6'

	socket.on('message', (msg, rinfo) => {
		console.log(`Received: ${msg} from ${rinfo.address}:${rinfo.port}`);
	});

	socket.bind(41234, () => {
		console.log('Listening on UDP port 41234');
	});

	// Sending data
	socket.send('Hello, UDP', 41234, 'localhost', (err) => {
		if (err) console.error(err);
	});
};

exports.version = () => {
	return '0.1.0';
};

