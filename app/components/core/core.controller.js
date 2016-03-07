(function() {
	'use strict';

	angular
		.module('app.core')
		.controller('CoreController', CoreController);

	CoreController.$inject = ['$location'];

	function CoreController($location) {
		var vm = this;

		vm.goLogin = goLogin;


		function goLogin() {
			$location.path('login', {name: 'ronsc'});
		}
	}
})();
