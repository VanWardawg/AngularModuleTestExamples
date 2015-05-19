'use strict';
angular.module('AngularModuleTestExamples.filters')
.filter('unitorder', function () {
	return function(items, reverse) {
		var filtered = [];
		var field = 'unit';
		angular.forEach(items, function(item) {
			filtered.push(item);
		});
		filtered.sort(function (a, b) {
			if(a.currentPosition[field]!= null&&b.currentPosition[field]!= null&&!isNaN(parseInt(a.currentPosition[field].value))&&!isNaN(parseInt(b.currentPosition[field].value)))
			return (parseInt(a.currentPosition[field].value) > parseInt(b.currentPosition[field].value) ? 1 : -1);
			else if(a.currentPosition[field]!= null&&b.currentPosition[field]!= null)
			return (a.currentPosition[field].value > b.currentPosition[field].value ? 1 : -1);
		});

		if(reverse) {filtered.reverse();}
		return filtered;
	};
});