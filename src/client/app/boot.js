'use strict';

import angular from 'angular';

import './components/components';
import mainModule from './components/main-app/main-module';

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name]);
});
