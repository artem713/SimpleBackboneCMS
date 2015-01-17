/**
 * Created by arttr_000 on 16.01.2015.
 */
define([
	"jquery",
	"backbone"
], function($, Backbone) {
	var Tab = Backbone.Model.extend({
		urlRoot: "SimpleBackboneCMS/data/tabs.json",
		initialize: function(tab) {
			for (var prop in tab) {
				this.set(prop, tab[prop]);
			}
		},
		openTab: function() {
			require(["views/tabs/" + this.id], function(tabModel) {
				var tab = new tabModel();
				tab.render();
				$("#tab").html(tab.$el);
			});
		}
	});
	return Tab;
});