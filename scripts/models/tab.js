/**
 * Created by arttr_000 on 16.01.2015.
 */
define([
	"jquery",
	"backbone"
], function($, Backbone) {
	var Tab = Backbone.Model.extend({
		urlRoot: "SimpleBackboneCMS/data/tabs.json"
	});
	return Tab;
});