(function (win, doc) {

	'use strict';

	// document ready
	docReady(function(){
		var tab = new Global.view.Tabs('.nav-tabs');
	});

	function docReady(handler){
		win.addEventListener('load', handler);
	}

}(window, document));