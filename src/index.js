const datagram = require('dgram');

const { version } = require('../package.json');

exports.create = (args) => {
	//ARGS
	/*
    String::from("Record Options:\r\n  \
    -r\t\t\tRecord Type\r\n  \
    -c\t\t\tDNS Class Type\r\n  \
    -ttl\t\t\tTTL (Time To Live)\r\n  \
    -name\t\t\tName\r\n  \
    -address\t\tIP Address\r\n  \
    -flags\t\tFlags\r\n  \
    -protocol\t\tProtocol\r\n  \
    -algorithm\t\tAlgorithm\r\n  \
    -public_key\t\tPublic Key in Base64\r\n  \
    -priority\t\tPriority\r\n  \
    -server\t\tServer\r\n  \
    -domain\t\tDomain\r\n  \
    -weight\t\tWeight\r\n  \
    -port\t\t\tPort\r\n  \
    -content\t\tContent\r\n  \
    -local\t\tLAN only toggle (true/false)\r\n  \
    -external\t\tExternal only toggle (true/false)")
	*/

	//CONVERT TO BENCODE...
	//VALIDATE TYPES A BIT...
	let request = {
		v: version,
		t: 'create',
		q: args
	};
};

exports.get = () => {

};

exports.remove = () => {

};

exports.version = () => {
	return version;
};

//PAsS CLIENT INSTEAD OF REQUEST...
function socket(user = '', password = '', host, port, request){
	const socket = datagram.createSocket('udp4'); // or 'udp6'

	socket.on('message', (msg, rinfo) => {
		console.log(`Received: ${msg} from ${rinfo.address}:${rinfo.port}`);
	});

	socket.bind(41234, () => {
		console.log('Listening on UDP port 41234');
	});

	socket.send('Hello, UDP', 41234, 'localhost', (err) => {
		if(err){
			console.error(err);
		}
	});
}

