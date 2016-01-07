var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function() {
		return <Link to={"/topics/"+this.props.id} className="list-group-item"> 
			<h4>{this.props.name}</h4>
			<p>	{this.props.description}</p>
		</Link>
	}
});