'use strict';

describe('Header', function () {

	// If testing a directive, you need to include the templates module to get your html partial
	beforeEach(module('AngularModuleTestExamples.header'));
	var location;
	beforeEach(module(function ($provide) {
		$provide.provider('ImageOrganizer', {
			$get: angular.noop
		});
		location = {
			url: angular.noop
		};
		$provide.provider('$location', {
			$get: function() {
				return location;
			}
		});
	}));

	describe('header directive', function () {
		var $compile, $scope;
		beforeEach(inject(function (_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$scope = _$rootScope_;
		}));

		it('should make correct element structure', function () {
			var el = $compile('<em-header></em-header>')($scope);
			$scope.$digest(); // Trigger the GET to get the template
			expect(el.find('p').text()).toBe('Angular Module Test Examples');
		});

		it('should navigate to given url', function () {
			spyOn(location, 'url');
			var el = $compile('<em-header></em-header>')($scope);
			$scope.$digest(); // Trigger the GET to get the template
			var localScope = el.scope();
			localScope.navigateTo('url');
			expect(location.url).toHaveBeenCalledWith('/url');
			localScope.navigateTo();
			expect(location.url).toHaveBeenCalledWith('/');
		});
	});
});
