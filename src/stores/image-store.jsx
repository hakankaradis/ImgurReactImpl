var Api = require('../utils/api')
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: [
		Actions // has getTopics action, action is proxy for getTopics method
	],
	getImages: function (topicId) {
		Api.get('topics/'+topicId)
		.then(function(json){
			this.topics = json.data;
			this.triggerChange();
		}.bind(this));
	},
	triggerChange: function() {
		this.trigger('change', this.topics);
	}
});