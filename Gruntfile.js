module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		karma: {
			unit: {
				options: {
					frameworks: ['jasmine'],
					singleRun: true,
					browsers: ['PhantomJS'],
					files: [
						'bower_components/angular/angular.min.js',
						'bower_components/angular-mocks/angular-mocks.js',
						'app/*.js',
						'spec/*.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('default', ['karma']);
};