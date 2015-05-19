'use strict';

describe('Gallery Grid View', function () {

	// If testing a directive, you need to include the templates module to get your html partial
	beforeEach(module('AngularModuleTestExamples.gallery-grid-view'));

	beforeEach(module(function ($provide) {
		$provide.provider('ImageOrganizer', {
			$get: function() {
				return this;
			},
			galleryImages: ['assets/item1']
		});
	}));

	describe('gallery grid view directive', function () {
		var $compile, $scope;
		beforeEach(inject(function (_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$scope = _$rootScope_;
			$scope.$emit = angular.noop;
		}));

		it('should be able to show advanced', function () {
			spyOn($scope, '$emit');
			var el = $compile('<gallery-grid-view></gallery-grid-view>')($scope);
			$scope.$digest(); // Trigger the GET to get the template
			var localScope = el.scope();
			localScope.showAdvanced({stopPropagation:angular.noop}, 'assets/item1');
			expect($scope.$emit).toHaveBeenCalled();
		});
	});
});
