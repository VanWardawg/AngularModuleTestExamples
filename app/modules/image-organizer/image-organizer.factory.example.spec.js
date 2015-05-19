'use strict';

describe('Image Organizer Factory', function () {

	beforeEach(module('AngularModuleTestExamples.image-organizer'));

	var SomeBackendThing, ImageOrganizer, success;

	beforeEach(module(function ($provide) {
		success = true;
		$provide.provider('SomeBackendThing', SomeBackendThing = {
			$get: function () {
				return this;
			},
			query: function() {
				return {
					then: function(callback, error) {
						if(success){
							callback('test');
						}
						else {
							error('1');
						}
					}
				};
			}
		});
	}));
	describe('Successful Api Call', function () {
		beforeEach(inject(function (_ImageOrganizer_) {
			ImageOrganizer = _ImageOrganizer_;
		}));

		it('should be able to get version on initialization', function () {
			expect(ImageOrganizer.version).toBe('test');
			expect(ImageOrganizer.galleryImages).toBeDefined();
		});
	});

	describe('Unuccessful Api Call', function () {
		beforeEach(module(function () {
			success = false;
		}));
		beforeEach(inject(function (_ImageOrganizer_) {
			ImageOrganizer = _ImageOrganizer_;
		}));
		it('should be error', function () {
			expect('ERROR ' + '1').not.toBe(SomeBackendThing.version);
		});
	});
});
