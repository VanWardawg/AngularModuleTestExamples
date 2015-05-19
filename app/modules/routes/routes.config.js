angular.module('AngularModuleTestExamples.routes').config([
	'$urlRouterProvider',
function ($urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/');
}]);
