var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Reflux = require('reflux');
var Topic = require('./topic');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');


module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange') // topicStore trigger eny event run the onChangFunction
	],
	getInitialState: function() {
		return {
			topics:[]
		}
	},
	componentWillMount: function() { // data will be mount only once
		Actions.getTopics(); // return value might chance over time, calls TopicStore.getTopics()
			
				// we fetched topics
				// topics are available TopicStore.topics
				
	},
	render : function () {
		return <nav className="navbar navbar-default header"> 
			<div className="container-fluid">
				<Link to="/" className="navbar-brand"> 
					Imgur Browser
				</Link>
				<ul className="nav navbar-nav navbar-right"> 
					{this.renderTopics()}
				</ul>
			</div>
		</nav>
	},
	renderTopics: function() {
		return this.state.topics.slice(0,3).map(function(topic){
			return <li key={topic.id} >
				<Link activeClassName="active" to={"/topics/"+topic.id} > 
					{topic.name}
				</Link>
			</li>
			
		});
	},
	onChange: function(event, topics){
		this.setState({
			topics: topics
		});
	}
});