describe('CourseController', function() {
	var courseScope, 
		vm;

	beforeEach(module('app.course'));

	beforeEach(inject(function($rootScope, $controller) {
		courseScope = $rootScope.$new();
		$controller('CourseController as vm', {
			$scope: courseScope
		});

		vm = courseScope.vm;
	}));

	it('can add new course', function() {
		vm.addCourse('SE');
		expect(vm.courses).toEqual(['SE']);
	});

	it('can view list of courses', function() {
		expect(vm.viewCourse()).toEqual([]);
	});
});