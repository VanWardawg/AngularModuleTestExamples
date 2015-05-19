'use strict';

angular.module('AngularModuleTestExamples',
		['ngMaterial',
		'AngularModuleTestExamples.header',
		'AngularModuleTestExamples.routes',
		'AngularModuleTestExamples.image-viewer',
		'AngularModuleTestExamples.footer',
		'AngularModuleTestExamples.controllers'])
.run(['$rootScope', function ($scope) {
	$scope.showImageViewer = false;

	$scope.$on('showImage', function(event, image, imageList) {
		$scope.image = image;
		$scope.imageList = imageList;
		$scope.showImageViewer = true;
	});

	$scope.hideOverlay = function() {
		if($scope.showImageViewer) {
			$scope.showImageViewer = false;
		}
	};
}]);

// Template module definition
angular.module('AngularModuleTestExamples.templates', []);
