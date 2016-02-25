(function() {
	'use strict';

	angular
		.module('app.course')
		.controller('CourseCtrl', CourseCtrl);

	CourseCtrl.$inject = [
		'$scope'
	];

	function CourseCtrl($scope) {
		$scope.courses = [];
		$scope.addCourse = addCourse;
		$scope.viewCourse = viewCourse;
		

		function addCourse(course) {
			$scope.courses.push(course);
		}

		function viewCourse() {
			return $scope.courses;
		}
	}

})();
