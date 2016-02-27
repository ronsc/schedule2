module.exports = function(config) {
	config.set({
		basePath: '../',
		
		frameworks: ['jasmine'],

		files: [
			// vendor files
			'app/bower_components/angular/angular.min.js',
			'app/bower_components/angular-mocks/angular-mocks.js',

			// src files
			'app/app.modules.js',
			'app/components/**/*.js',

			// spec files
			'spec/unit/controllers/*.spec.js'
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
