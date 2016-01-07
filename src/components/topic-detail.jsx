var React = require('react');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange') // topicStore trigger eny event run the onChangFunction
	],
	getInitialState: function() {
		return {
			images:[]
		}
	},
	componentWillMount: function() { // data will be mount only once
		Actions.getImages(this.props.params.id); // return value might chance over time, calls TopicStore.getImages()
			
				// we fetched topics
				// images are available TopicStore.images
				
	},
	componentWillReceiveProps: function(nextProps) { // ****
		// render your self again
		Actions.getImages(nextProps.params.id);
	},
	render: function () {
		return <div> I am detail {this.props.params.id} {this.renderImages()}</div>
	},
	renderImages: function() {
		return this.state.images.slice(0,20).map(function(image){
			return <ImagePreview key={image.id} {...image}/>
		});
	},
	onChange: function(event, images) {
		this.setState({
			images: images
		});
	}
});