var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api')

module.exports = Reflux.createStore({
	listenables: [
		Actions // has getTopics action, action is proxy for getTopics method
	],
	getComments: function(id) {
		Api.get('gallery/'+id+'/comments/')
		.then(function(json){
			this.comments = json.data; 
			this.triggerChange();
		}.bind(this));	
	},
	triggerChange: function() {
		this.trigger('change', this.comments);
	}
});