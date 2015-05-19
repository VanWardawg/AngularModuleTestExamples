angular.module('AngularModuleTestExamples.image-viewer')
.directive('imageViewer', ['$rootScope', '$document', function($rootScope, $document) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/image-viewer/image-viewer.html',
		scope: {
			'image': '=',
			'imageList': '='
		},
		link: function($scope) {
			$scope.index = 0;
			$document.bind('keydown keypress', function (e) {
				if (e.which === 39) {
					$scope.nextImage({stopPropagation:angular.noop});
					$scope.$apply();
				}
				else if(e.which === 37) {
					$scope.previousImage({stopPropagation:angular.noop});
					$scope.$apply();					
				}
            });

			$scope.previousImage = function (event) {
				event.stopPropagation();
				$scope.index = $scope.index > 0 ? --$scope.index : $scope.imageList.length -1;
				$scope.image = $scope.imageList[$scope.index];
				while(!$scope.image.src) {
					$scope.image = $scope.imageList[--$scope.index];
				}
			};

			$scope.nextImage = function(event) {
				event.stopPropagation();
				$scope.index = $scope.index < $scope.imageList.length -1 ? ++$scope.index : 0;
				$scope.image = $scope.imageList[$scope.index];
				while(!$scope.image.src) {
					$scope.image = $scope.imageList[++$scope.index];
				}
			};

			$scope.$on('$destroy', function () {
			  $document.unbind('keydown keypress');
			});

			if ($scope.imageList) {
				for(var i = 0; i < $scope.imageList.length; i++) {
					if($scope.imageList[i] === $scope.image) {
						$scope.index = i;
						break;
					}
				}
			}
			$scope.isLarge = $rootScope.isLarge;
			$scope.isMedium = $rootScope.isMedium;
			$scope.isSmall = $rootScope.isSmall;
		}
	};
}]);