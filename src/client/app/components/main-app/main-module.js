'use strict';

import angular from 'angular';
import MainController from './main-controller';

const app = angular.module('mainApp', []);
app.controller('MainController', MainController);

export default app;
