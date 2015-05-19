'use strict';

describe('Image Viewer', function () {

	// If testing a directive, you need to include the templates module to get your html partial
	beforeEach(module('AngularModuleTestExamples.controllers'));

	var ImageOrganizer;
	beforeEach(module(function ($provide) {
		$provide.provider('ImageOrganizer', ImageOrganizer = {
			$get: angular.noop
		});
	}));

	describe('Image Viewer directive', function () {
		var $controller, $scope, MainCtrl;
		beforeEach(inject(function (_$controller_, _$rootScope_) {
			$controller = _$controller_;
			$scope = _$rootScope_;
			MainCtrl = $controller('MainCtrl', {
				$scope: $scope,
				ImageOrganizer: ImageOrganizer
			});
		}));

		it('should initialize to index 1', function () {
			expect($scope.ImageOrganizer).toBe(ImageOrganizer);
			$scope.whatACoolFunction();
		});
	});
});
