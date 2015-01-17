/**
 * Created by arttr_000 on 16.01.2015.
 */
define([
	"jquery",
	"underscore",
	"backbone",
	// Views to load
	'views/tabs_view'
], function($, _, Backbone, tabsView){
	var AppRouter = Backbone.Router.extend({
		routes: {
			'examples': 'showExamples',
			'tabs/:id': 'showExample',
			// Default
			'*actions': 'defaultAction'
		},

		showExamples: function() {
			exampleListView.render();
		},
		showExample: function(id) {
			console.log("!!!!!!!!!!!!!!");
		},
		defaultAction: function(actions) {
			tabsView.render();
		}
	});

	var initialize = function(){
		var app_router = new AppRouter();
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});