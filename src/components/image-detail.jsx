var React = require('react');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var Title = require('./title');
var Description = require('./description');
var ImageContent = require('./image-content');
var CommentStore = require('../stores/comment-store');
var Comments = require('./comments');

module.exports = React.createClass({
	getInitialState: function (){
		return {
			image: {},
			comments : []
		}
	},
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange'),
		Reflux.listenTo(CommentStore, 'onChange')
	],
	componentWillMount: function() {
		Actions.getImage(this.props.params.id);
		Actions.getComments(this.props.params.id);
	},
	render: function(){
		return <div className="image-detail"> 
			{this.renderBody()}
			<h3> Comments </h3>
			{this.renderComments()}
		</div>
	},
	renderBody: function() {
		if(!this.state.image) {
			return null
		}

		return <span> 
			<Title ttl={this.state.image.title} />
			<ImageContent animated={this.state.image.animated} link={this.state.image.link} mp4={this.state.image.mp4} />
			<Description desc={this.state.image.description} />
		</span>
	},
	renderComments: function() {
		if (!this.state.comments) {
			return null
		} 

		return <Comments cmm={this.state.comments}/>
		
	},
	onChange: function() { // we are interested with a image that we know its id so we implement find method in image-store.jsx
		console.log("CALLED ONCHANGE");
		this.setState({
			image: ImageStore.find(this.props.params.id),
			comments: CommentStore.comments
		});
	}
});