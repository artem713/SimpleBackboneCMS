/**
 * Created by arttr_000 on 16.01.2015.
 */
require.config({
	shim: {
		"underscore": {
			exports: "_"
		},
		"backbone": {
			exports: "Backbone",
			deps: [
				"underscore",
				"jquery"
			]
		}
	},
	paths: {
		jquery: "libs/jQuery/jquery-1.11.2.min",
		underscore: "libs/underscore/underscore-min",
		backbone: "libs/backbone/backbone-min",
		text: "libs/require/text"
	}
});
require(["app"], function(App) {
	App.initialize();
});
