'use strict';

describe('The about view', function () {
  	var about_page;
  	var ptor;

  	beforeEach(function () {
  		ptor = protractor.getInstance();
    	ptor.ignoreSynchronization = true;
    	browser.get('http://localhost:3000/#/about');
    	ptor.wait(
		    function() {
		            return ptor.driver.getCurrentUrl().then(
		                function(url) {
		                    return targetUrl == url;
		                });
		    }, 2000, 'It\'s taking too long to load ' + targetUrl + '!'
		);    	
    	about_page = require('./about.po');
  	});

  	it('list more than 5 awesome things', function () {
    	expect(about_page.thumbnailEls.count()).toBeGreaterThan(5);
  	});

  	it('should load a list of awesome things', function() {
      	expect(about_page.count()).toBeGreaterThan(1);
   	});

});
