module.exports = function(config) {
	config.set({
		basePath: '',
		
		frameworks: ['jasmine'],

		files: [
			// vendor files
			'app/bower_components/angular/angular.min.js',
			'app/bower_components/angular-mocks/angular-mocks.js',

			// src files
			'app/components/**/*.module.js',
			'app/components/**/*.config.js',
			'app/components/**/*.controller.js',
			'app/app.modules.js',

			// spec files
			'app/components/**/*.spec.js',
		],

		browsers: ['PhantomJS'],

		reporters: ['spec'],
		specReporter: {
	    	maxLogLines: 5,
	    	suppressErrorSummary: true,
	    	suppressFailed: false,
	    	suppressPassed: false, 
	    	suppressSkipped: true  
	    },

	    plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-spec-reporter',
		],
	});
};
