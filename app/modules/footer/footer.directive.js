angular.module('AngularModuleTestExamples.footer')
.directive('emFooter', [function () {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/footer/footer.html'
	};
}]);