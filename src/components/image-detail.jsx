var React = require('react');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = React.createClass({
	getInitialState: function (){
		return {
			image: null
		}
	},
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange')
	],
	componentWillMount: function() {
		console.log('id', this.props.params.id);
		Actions.getImage(this.props.params.id);
	},
	render: function(){
		console.log("rendering", this.state.image);
		return <div> 
			{this.state.image}
			RENDERED
		</div>
	},
	onChange: function() { // we are interested with a image that we know its id so we implement find method in image-store.jsx
		console.log("CALLED ONCHANGE");
		this.setState({
			image: ImageStore.find(this.props.params.id)
		});
	}
});