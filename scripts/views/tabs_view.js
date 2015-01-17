/**
 * Created by arttr_000 on 16.01.2015.
 */
define([
	"jquery",
	"underscore",
	"backbone",
	"collections/tabs",
	"views/tab_view"
], function($, _, Backbone, tabsCollection, TabView){
	var TabsView = Backbone.View.extend({
		el: $('#tabs'),
		template: _.template("<nav></nav>"),
		tabs: [],
		initialize: function(){
			this.collection = new tabsCollection;
		},
		addTab: function(tab) {
			var tabView = new TabView(tab);
			this.$el.append(tabView.render().el);
			this.tabs.push(tabView);
		},
		render: function(){
			var _this = this;
			this.collection.deferred.done(function(){
				var data = _this.collection.toJSON();
				data.sort(function(d1, d2){
					return d1.order > d2.order;
				});
				data.forEach(_this.addTab, _this);
				_this.tabs[0].openTab();
				_this.rendered = true;
			});
		}
	});
	return new TabsView;
});
