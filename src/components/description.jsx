var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div className="panel-footer">
			<h5>{this.props.desc}</h5>
		</div>
	}
});