var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main')
var Header = require('./components/header')

module.exports = (
	<Router> 
		<Route path="/" component={Main}>
			
		</Route>
	</Router>
);