'use strict';

describe('app.js', function () {

	var rootScope, showImage;
	beforeEach(module(function ($provide) {
		$provide.provider('$rootScope', rootScope = {
			$get: function () {
				return this;
			},
			$on: function(type, func) {
				showImage = func;
			}
		});
	}));

	beforeEach(module('AngularModuleTestExamples'));

	describe('run', function () {
		var image, imageList;
		beforeEach(function () {
			image = {src:'assests/test1'};
			imageList = [{src:'assests/test'},image, {empty:'true'}, {src:'assests/test2'}];
		});

		it('should who image viewer on showImage event', function () {
			inject(); // required to fire the module loading
			expect(rootScope.showImageViewer).toBe(false);
			showImage({},image, imageList);
			expect(rootScope.showImageViewer).toBe(true);
		});

		it('should hide overlay', function () {
			inject(); // required to fire the module loading
			expect(rootScope.showImageViewer).toBe(false);
			showImage({},image, imageList);
			expect(rootScope.showImageViewer).toBe(true);
			rootScope.hideOverlay();
			expect(rootScope.showImageViewer).toBe(false);
			// should do nothing if not currently showing the viewer
			rootScope.hideOverlay();
			expect(rootScope.showImageViewer).toBe(false);
		});
	});
});
