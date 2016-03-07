(function() {
	'use strict';

	angular
		.module('app.course')
		.controller('CourseController', CourseController);

	CourseController.$inject = [];

	function CourseController() {
		var vm = this;
		
		vm.courses = [];
		vm.addCourse = addCourse;
		vm.viewCourse = viewCourse;
		

		function addCourse(course) {
			vm.courses.push(course);
		}

		function viewCourse() {
			return vm.courses;
		}
	}

})();
