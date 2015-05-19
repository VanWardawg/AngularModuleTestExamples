'use strict';

describe('Image Viewer', function () {

	// If testing a directive, you need to include the templates module to get your html partial
	beforeEach(module('AngularModuleTestExamples.controllers'));

	beforeEach(module(function ($provide) {
		$provide.provider('ImageOrganizer', {
			$get: angular.noop
		});
	}));

	describe('Image Viewer directive', function () {
		var $controller, $scope, otherCtrl;
		beforeEach(inject(function (_$controller_, _$rootScope_) {
			$controller = _$controller_;
			$scope = _$rootScope_;
			otherCtrl = $controller('OtherCtrl', {
				$scope: $scope
			});
		}));

		it('should be able to run the complex functions branches', function () {
			$scope.isTrue = true;
			$scope.ThisFunctionIsComplex();
			$scope.isTrue = false;
			$scope.ThisFunctionIsComplex();
			$scope.toggleHiddenVariable();
			$scope.isTrue = true;
			$scope.ThisFunctionIsComplex();
			$scope.isTrue = false;
			$scope.ThisFunctionIsComplex();
			
		});
	});
});
