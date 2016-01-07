var Api = require('../utils/api')
var Reflux = require('reflux');
var Actions = require('../actions');
// fetching and storing data here

module.exports = Reflux.createStore({
	listenables: [
		Actions // has getTopics action, action is proxy for getTopics method
	],
	getTopics: function() {
		return Api.get('topics/defaults')
			.then(function(json){
				this.images = json.data;
				this.triggerChange();
			}.bind(this));
	},
	triggerChange: function() {
		this.trigger('change', this.images);
	}
});