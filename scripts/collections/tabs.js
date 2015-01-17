/**
 * Created by arttr_000 on 16.01.2015.
 */
define([
	"backbone",
	"models/tab"
], function(Backbone, tab){
	var Tabs = Backbone.Collection.extend({
		model: tab,
		url: "/SimpleBackboneCMS/data/tabs.json",
		initialize: function(){
			this.deferred = this.fetch();
		}
	});
	return Tabs;
});