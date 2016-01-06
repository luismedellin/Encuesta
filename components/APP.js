var React 	= require('react');
var io = 	require('socket.io-client');

var APP = React.createClass({

	componentWillMount(){
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
	},

	connect(){
		alert('Connect: '+this.socket.id);
	},

	render() {
		return (<h1>Hola mundo</h1>);
	}
});

module.exports = APP;