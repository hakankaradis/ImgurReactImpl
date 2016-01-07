var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Header = require('./components/header');
var TopicDetail = require('./components/topic-detail');

module.exports = (
	<Router> 
		<Route path="/" component={Main}>
			<Route path="topics/:id" component={TopicDetail}>
			</Route>
		</Route>
	</Router>
);