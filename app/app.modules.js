(function() {
	'use strict';

	// Main App
	angular
		.module('ScheduleApp', [
			'app.core',
			'app.course',

			'ngMaterial'
		]);

	// Components App
	angular
		.module('app.course', []);
	
})();
