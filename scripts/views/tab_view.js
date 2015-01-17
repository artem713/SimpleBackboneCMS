/**
 * Created by arttr_000 on 16.01.2015.
 */
define([
	"jquery",
	"underscore",
	"backbone",
	"models/tab"
], function($, _, Backbone, tabModel){
	var TabView = Backbone.View.extend({
		tagName: "li",
		id: "tab-view",
		className: "tab",
		model: tabModel,
		//template: _.template("<a href='<%= path =>'><%= title =></a>"),
		render: function(){
			this.$el.html("<a href=/tabs/" + this.model.id + ">" + this.model.title + "</a>");
			return this;
		}
	});
	return TabView;
});
