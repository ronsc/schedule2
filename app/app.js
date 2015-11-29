angular.module('ScheduleApp', []);

angular.module('ScheduleApp')
.controller('CourseController', function CourseController($scope) {
	$scope.courses = [];

	$scope.addCourse = function(course) {
		$scope.courses.push(course);
	};

	$scope.viewCourse = function() {
		return $scope.courses;
	}
});

