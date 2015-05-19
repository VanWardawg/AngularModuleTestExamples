'use strict';

describe('gallery & home route', function () {

	beforeEach(module('AngularModuleTestExamples.routes'));

	var $scope, $location, $state;
	// beforeEach(module(function (_$provide_) {
	// }));

	beforeEach(inject(function (_$rootScope_, _$location_, _$state_) {
		$scope = _$rootScope_.$new();
		$location = _$location_;
		$state = _$state_;
	}));

	it('should respond to URL change', function () {
		$location.url('/');
		$scope.$emit('$locationChangeSuccess');
		$scope.$digest();
		expect($state.current.name).toEqual('home');
	});
});
