describe('CourseController', function() {
	var $controller, CourseController, $socpe;

	beforeEach(module('ScheduleApp'));

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	beforeEach(function() {
		$scope = {};
		CourseController = $controller('CourseController', {
			$scope: $scope
		});
	});

	it('can add new course', function() {
		$scope.addCourse('SE');
		expect($scope.courses).toEqual(['SE']);
	});

	it('can view list of courses', function() {
		expect($scope.viewCourse()).toEqual([]);
	});
});