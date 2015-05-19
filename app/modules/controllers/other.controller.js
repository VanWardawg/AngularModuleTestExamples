'use strict';
angular.module('AngularModuleTestExamples.controllers')
.controller('OtherCtrl', ['$scope', function ($scope) {
	var hiddenVariable = false;
	$scope.ThisFunctionIsComplex = function () {
		if(hiddenVariable) {
			thisFunction();
		}
		else {
			if(!hiddenVariable && $scope.isTrue) {
				console.log('here');
			}
		}
	};

	$scope.toggleHiddenVariable = function () {
		hiddenVariable = !hiddenVariable;
	};

	var thisFunction = function() {
		if($scope.isTrue) {
			console.log('here');
		}
	};
}]);