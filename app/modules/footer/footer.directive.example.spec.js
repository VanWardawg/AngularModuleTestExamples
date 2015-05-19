'use strict';

describe('Footer', function () {

	// If testing a directive, you need to include the templates module to get your html partial
	beforeEach(module('AngularModuleTestExamples.footer'));

	// beforeEach(module(function ($provide) {
	// }));

	describe('footer directive', function () {
		var $compile, $scope;
		beforeEach(inject(function (_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$scope = _$rootScope_;
		}));

		it('should make correct element structure', function () {
			var el = $compile('<em-footer></em-footer>')($scope);
			$scope.$digest(); // Trigger the GET to get the template
			expect(el.find('div').text()).toBe('© Angular Module Test Examples 2015 - All Rights Reserved');
		});
	});
});
