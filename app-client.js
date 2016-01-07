var React 	= require('react');
var Router  = require('react-router');
var Route 	= Router.Route;
var DefaultRoute = Router.DefaultRoute;

var APP 	= require('./components/APP');
var Audience= require('./components/Audience');
var Board	= require('./components/Board');
var Speaker = require('./components/Speaker');

var routes = (
	<Route handler={APP}>
		<DefaultRoute handler={Audience} />
		<Route name="board" path="board" handler={Board} ></Route>
		<Route name="speaker" path="speaker" handler={Speaker} ></Route>
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler />, document.getElementById('react-container'));
});
