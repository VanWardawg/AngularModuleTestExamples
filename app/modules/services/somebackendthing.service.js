angular.module('AngularModuleTestExamples.services')
.service('SomeBackendThing', [
	'Resourcify',
	'$q',
function (Resourcify, $q) {
	'use strict';

	// Url promise
	var url =  $q.when('version.json');

	var MissionaryLettersBuilder = new Resourcify('MissionaryLetters', url, {
		usePromise: true
	});

	// Query call
	MissionaryLettersBuilder.request({
		method: 'GET',
		isInstance: false,
		name: 'query',
		isArray: false,
		invalidateListModels: true
	});

	return MissionaryLettersBuilder.create();
}]);