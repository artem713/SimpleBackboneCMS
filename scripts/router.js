/**
 * Created by arttr_000 on 16.01.2015.
 */
define([
	"jquery",
	"underscore",
	"backbone",
	'views/tabs_view'
], function($, _, Backbone, tabsView){
	var AppRouter = Backbone.Router.extend({
		routes: {
			'tabs/:id': 'loadTab',
			'*actions': 'defaultAction'
		},
		loadTab: function(id) {
			if (!tabsView.rendered) {
				tabsView.render();
			}
			require(["views/tabs/" + id], function(tabModel) {
				if(!tabModel) {
					return;
				}
				var tab = new tabModel();
				tab.render();
				$("#tab").html(tab.$el);
			}, function(err) {
				console.warn(err);
			});
		},
		defaultAction: function(actions) {
			tabsView.render();
		}
	});

	var initialize = function(){
		var app_router = new AppRouter();
		Backbone.View.goTo = function(location, options) {
			app_router.navigate(location, options);
		};
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});