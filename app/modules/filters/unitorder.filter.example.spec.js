'use strict';

describe('Filter: unitorder', function () {

	// load the filter's module
	beforeEach(module('AngularModuleTestExamples.filters','mockedPersonJSON'));

	// initialize a new instance of the filter before each test
	var unitorder,people;
	beforeEach(inject(function ($filter,_peopleLeaders_) {
		unitorder = $filter('unitorder');
		people = [angular.copy(_peopleLeaders_[2]),angular.copy(_peopleLeaders_[0]),angular.copy(_peopleLeaders_[1])];
	}));

	it('should order the current position unit by a integer value', function () {
		people[1].currentPosition.unit.value = '1';
		people[0].currentPosition.unit.value = '3';
		people[2].currentPosition.unit.value = '2';
		var ordered = unitorder(people,false);
		expect(ordered[0]).toBe(people[1]);
		expect(ordered[2]).toBe(people[0]);
		ordered = unitorder(people,true);
		expect(ordered[2]).toBe(people[1]);
		expect(ordered[0]).toBe(people[0]);
	});

	it('should order any other unit thats not a number by string value', function () {
		people[1].currentPosition.unit.value = 'A';
		people[0].currentPosition.unit.value = 'B';
		people[2].currentPosition.unit.value = 'B';
		var ordered = unitorder(people,false);
		expect(ordered[0]).toBe(people[1]);
	});

	it('should return the same array if field is not on the current position', function () {
		people[0].currentPosition.unit = undefined;
		people[0].currentPosition.unit = undefined;
		var ordered = unitorder(people,false);
		expect(ordered[1]).toBe(people[1]);
		ordered = unitorder(people,true);
		expect(ordered[1]).toBe(people[1]);
	});

});
