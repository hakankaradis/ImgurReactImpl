var Api = require('../utils/api')
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
	listenables: [
		Actions // has getTopics action, action is proxy for getTopics method
	],
	getImages: function (topicId) {
		Api.get('topics/'+topicId)
		.then(function(json){
			this.images = _.reject(json.data, function(image){
				return image.is_album;
			});
			this.triggerChange();
		}.bind(this));
	},
	find: function(id) { // search in collection
		var image = _.findWhere(this.images, {id:id}); // this.image might be undefined empty null
		if(image) {
			return image;
		} else {
			this.getImage(id);
			return null;
		}
	},
	getImage: function(id) {
		Api.get('gallery/image/'+id)
		.then(function(json){
			if(this.images) {
				this.images.push(json.data);
			} else {
				this.images = [json.data];
			}

			this.triggerChange();
		}.bind(this));
	},
	triggerChange: function() {
		this.trigger('change', this.images);
	}
});