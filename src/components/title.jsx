var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div className="panel panel-default">
			<div className="panel-heading">
				<h4>{this.props.ttl}</h4>
			</div>
		 </div >
	}
});