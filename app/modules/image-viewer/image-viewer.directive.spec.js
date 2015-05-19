'use strict';

describe('Image Viewer', function () {

	// If testing a directive, you need to include the templates module to get your html partial
	beforeEach(module('AngularModuleTestExamples.image-viewer'));

	var keyDown, document;
	beforeEach(module(function ($provide) {
		$provide.provider('$document', document = {
			$get: function() {
				return this;
			},
			bind: function(what, func) {
				keyDown = func;
			},
			unbind: angular.noop
		});
	}));

	describe('Image Viewer directive', function () {
		var $compile, $scope;
		beforeEach(inject(function (_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$scope = _$rootScope_;
			$scope.image = {src:'assests/test1'};
			$scope.imageList = [{src:'assests/test'},$scope.image, {empty:'true'}, {src:'assests/test2'}];
		}));

		it('should initialize to index 1', function () {
			var el = $compile('<image-viewer image="image" image-list="imageList"></image-viewer>')($scope);
			$scope.$digest(); // Trigger the GET to get the template
			var localScope = el.isolateScope();
			expect(localScope.index).toBe(1);
		});

		it('should recognize keydowns', function () {
			var el = $compile('<image-viewer image="image" image-list="imageList"></image-viewer>')($scope);
			$scope.$digest(); // Trigger the GET to get the template
			var localScope = el.isolateScope();
			keyDown({which:39});
			expect(localScope.index).toBe(3);
			keyDown({which:39});
			expect(localScope.index).toBe(0);
			keyDown({which:37});
			expect(localScope.index).toBe(3);
			keyDown({which:37});
			expect(localScope.index).toBe(1);
			keyDown({which:25});
		});

		it('should remove keydowns on destroy', function () {
			spyOn(document, 'unbind');
			$compile('<image-viewer image="image" image-list="imageList"></image-viewer>')($scope);
			$scope.$digest(); // Trigger the GET to get the template
			$scope.$destroy();
			expect(document.unbind).toHaveBeenCalled();
		});
		it('should be fine without image-list', function () {
			var el = $compile('<image-viewer image="image" image-list=""></image-viewer>')($scope);
			$scope.$digest(); // Trigger the GET to get the template
			var localScope = el.isolateScope();
			expect(localScope.index).toBe(0);
		});
	});
});
