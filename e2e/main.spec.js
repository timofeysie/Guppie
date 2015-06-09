'use strict';

describe('The main view', function () {
  var main_page;
  var ptor;

  beforeEach(function () {
    ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;
    browser.get('http://localhost:3000/#/main.html');
    ptor.wait(
        function() {
                return ptor.driver.getCurrentUrl().then(
                    function(url) {
                        return targetUrl == url;
                    });
        }, 20000, 'It\'s taking too long to load ' + targetUrl + '!'
    );
    main_page = require('./main.po');
  });

  it('should include a title and image with alternate text', function() {
    expect(main_page.h1El.getText()).toBe('Gulp Angular');
    expect(main_page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    expect(main_page.imgEl.getAttribute('alt')).toBe('I\'m Guppie');
  });

  it('should include a description input field', function() {
    expect(main_page.descriptionEl.getText()).toBe(''); 
    expect(main_page.descriptionInputEl.getText()).toBe('jacksparrow'); 
  });

});
