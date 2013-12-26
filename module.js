(function() {
	'use strict';

	var root = this;

	var yourModuleName = function() {

	};

	// AMD / RequireJS
	if (typeof define !== 'undefined' && define.amd) {
		define([], function () {
				return yourModuleName;
		});
	}
	// Node.js
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = yourModuleName;
	}
	// included directly via <script> tag
	else {
		root.yourModuleName = yourModuleName;
	}

}());