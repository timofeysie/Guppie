/**
 * This file uses the Page Object pattern to define the about page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var AboutPage = function() { 
  this.jumbEl = element(by.css('.jumbotron'));
  this.h1El = this.jumbEl.element(by.css('h1'));
  this.imgEl = this.jumbEl.element(by.css('img'));
  this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in awesomeThings'));
  // page
  this.loadAll = function() {
    browser.get('http://localhost:3000/#/about');
  };
  this.count = function() {
    return element.all(by.css('md-list-item')).count();
  };
};

module.exports = new AboutPage();
