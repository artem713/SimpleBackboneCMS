/**
 * Created by arttr_000 on 16.01.2015.
 */
define([
	"backbone"
], function(Backbone) {
	return Backbone.View.extend({
		render: function() {
			this.$el.html("<ul><li>Dummy</li><li>List</li></ul>");
		}
	})
});