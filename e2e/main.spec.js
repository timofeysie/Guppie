'use strict';

describe('The main view', function () {
  var main_page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/main.html');
    main_page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(main_page.h1El.getText()).toBe('Gulp Angular');
    expect(main_page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    expect(main_page.imgEl.getAttribute('alt')).toBe('I\'m Guppie');
  });

});
