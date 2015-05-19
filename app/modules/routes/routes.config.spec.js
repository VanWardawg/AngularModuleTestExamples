'use strict';

describe('main route', function () {

	beforeEach(module('AngularModuleTestExamples.routes'));

	var $scope, $location, $state, $urlRouter;
	// beforeEach(module(function (_$provide_) {
	// }));
	beforeEach(inject(function (_$rootScope_, $templateCache, _$location_, _$state_, _$urlRouter_) {
		$scope = _$rootScope_.$new();
		$location = _$location_;
		$state = _$state_;
		$urlRouter = _$urlRouter_;
		$templateCache.put('template.html', '');
	}));

	it('should redirect to the main route / on invalid route', inject(function () {
		$location.url('/someRandomURL');
		$scope.$emit('$locationChangeSuccess');
		$scope.$digest();
		expect($location.path()).toBe('/');
	}));

	it('should not redirect to the main route / on valid route', inject(function () {
		$location.url('/');
		$scope.$emit('$locationChangeSuccess');
		$scope.$digest();
		expect($state.current.name).toBe('home');
	}));
});
