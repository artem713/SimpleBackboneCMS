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
		initialize: function(){
			this.collection = new tabsCollection;
		},
		addTab: function(tab) {
			var tabView = new TabView({model: tab});
			this.$el.append(tabView.render().el);
		},
		render: function(){
			var _this = this;
			this.collection.deferred.done(function(){
				var data = _this.collection.toJSON();
				data.forEach(_this.addTab, _this);
				//_this.$el.html(_this.template(data));
			});
		}
	});
	return new TabsView;
});
