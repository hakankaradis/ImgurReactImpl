var React = require('react');

module.exports = React.createClass({
	render: function(){
		return <ul className="list-group">{this.renderContent()}</ul>
	},
	renderContent: function() {
		return this.props.cmm.map(function(comment){
			return <li className="list-group-item comment-box" key={comment.id}> 
				<span className="badge">{comment.up}</span>
				<h5 > {comment.author}</h5>
				{comment.comment}
			</li>
		});
	}
});