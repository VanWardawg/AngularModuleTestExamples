'use strict';

describe('SomeBackendThing Service', function () {

	beforeEach(module('AngularModuleTestExamples.services'));

	var $p, SomeBackendThing, $http;

	beforeEach(module(function ($provide) {
		$p = $provide;
	}));

	beforeEach(inject(function (_$q_, _SomeBackendThing_, _$httpBackend_) {
		SomeBackendThing = _SomeBackendThing_;
		$http = _$httpBackend_;
	}));

	it('should make get (query) request to the correct url', function () {
		$http.expectGET('version.json')
		.respond({});
		SomeBackendThing.query();
		$http.flush();
	});
});
