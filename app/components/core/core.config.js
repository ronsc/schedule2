(function() {
	'use strict';

	angular
		.module('app.core')
		.config(configFunction);

	configFunction.$inject = ['$routeProvider'];

	function configFunction($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'components/login/login.view.html',
				// controller: 'OrdersController',
				// controllerAs: 'vm'
			});
	}
})();