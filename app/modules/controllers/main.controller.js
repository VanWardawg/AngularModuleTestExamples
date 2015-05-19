'use strict';
angular.module('AngularModuleTestExamples.controllers')
.controller('MainCtrl', ['$scope', 'ImageOrganizer', function ($scope, ImageOrganizer) {
	$scope.whatACoolFunction = function(test) {
		console.log(test);
	};
	$scope.ImageOrganizer = ImageOrganizer;
}]);