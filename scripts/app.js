/**
 * Created by arttr_000 on 16.01.2015.
 */
define([
	"jquery",
	"underscore",
	"backbone",
	"router"
], function($, _, Backbone, Router){
	var initialize = function() {
		Router.initialize();
	};
	return {
		initialize: initialize
	};
});