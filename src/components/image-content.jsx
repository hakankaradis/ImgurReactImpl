var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div className="panel-body">
			{this.renderContent()}
		</div>
	},
	renderContent: function() {
		if(this.props.animated) {
			return <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-playsinline>
				<source src={this.props.mp4} type="video/mp4"/>
			</video>

		} else {
			return <img src={this.props.link}/>
		}
	}
});