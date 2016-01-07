var React = require('react');
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
	render: function() {
		return <div className="list-group">
				List of topics
				{this.renderTopics()}
			</div>
	},
	renderTopics: function() {
		return this.state.topics.map(function(topic){
			return <Topic key={topic.id} {...topic}/>
			
		});
	},
	onChange: function(event, topics){
		this.setState({
			topics: topics
		});
	}
});