'use strict';

describe('The about view', function () {
  var about_page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/about');
    about_page = require('./about.po');
  });

  it('list more than 5 awesome things', function () {
    expect(about_page.thumbnailEls.count()).toBeGreaterThan(5);
  });

});
