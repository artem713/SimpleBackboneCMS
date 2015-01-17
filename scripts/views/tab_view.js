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
		template: _.template('<a href><%=title%></a>'),
		events: {
			"click a": "onOpenTabClick"
		},
		initialize: function(tab) {
			this.model = new tabModel(tab);
		},
		onOpenTabClick: function(e) {
			e.preventDefault();
			this.openTab();
		},
		openTab: function(){
			this.model.openTab();
			Backbone.View.goTo("tabs/" + this.model.get("id"), {navigate: true});
		},
		render: function(){
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});
	return TabView;
});
