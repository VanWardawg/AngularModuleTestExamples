angular.module('AngularModuleTestExamples.image-organizer')
.factory('ImageOrganizer', ['SomeBackendThing', function (SomeBackendThing) {
	'use strict';
	var _version = SomeBackendThing.query();
	_version.then(function (data) {
		_version = data;
	}, function (data) {
		//some error handling
		_version = 'ERROR:' + data;
	});
	var _galleryImages = [
				{
					src:'/assets/images/image-vertical.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/image-horizontal.jpg',
					span: {
						row:2,
						col:3
					}
				},{
					src:'/assets/images/image-vertical.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/image-square.jpg',
					span: {
						row:2,
						col:2
					}
				},{
					src:'/assets/images/image-vertical.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					box:'pink',
					span: {
						row:1,
						col:1
					}
				},
				{
					src:'/assets/images/image-vertical.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/image-square.jpg',
					span: {
						row:2,
						col:2
					}
				},
				{
					src:'/assets/images/image-horizontal.jpg',
					span: {
						row:2,
						col:3
					}
				},
				//second wave of boxes
				{
					src:'/assets/images/image-vertical.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/image-horizontal.jpg',
					span: {
						row:2,
						col:3
					}
				},{
					src:'/assets/images/image-vertical.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/image-square.jpg',
					span: {
						row:2,
						col:2
					}
				},
				{
					src:'/assets/images/image-vertical.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					box:'blue',
					span: {
						row:1,
						col:1
					}
				},{
					src:'/assets/images/image-vertical.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/image-square.jpg',
					span: {
						row:2,
						col:2
					}
				},
				{
					src:'/assets/images/image-horizontal.jpg',
					span: {
						row:2,
						col:3
					}
				}];
	return {
		get galleryImages() {
			return _galleryImages;
		},
		get version() {
			return _version;
		}
	};

}]);