angular.module('AngularModuleTestExamples.routes').requires.push('AngularModuleTestExamples.routes.gallery');

angular.module('AngularModuleTestExamples.routes.gallery').config([
	'$stateProvider',
function ($stateProvider) {
	'use strict';
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'modules/routes/gallery/gallery.html'
	}).state('home.gallery', {
		url: 'gallery',
		templateUrl: 'modules/routes/gallery/gallery.html'
	});
}]);
