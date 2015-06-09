/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() { 
  	//center
  	this.centerEl = element(by.css('.center-content'));
  	this.h1El = this.centerEl.element(by.css('h1'));
  	this.imgEl = this.centerEl.element(by.css('img'));
  	// right content form elements
  	this.rightEl = element(by.css('.right-content'));
  	// get the description element by its attribute
  	this.descriptionEl = this.rightEl.element(by.model('project.description'));
  	this.descriptionInputEl = this.rightEl.element(by.model('project.description')).sendKeys('jacksparrow');
};

module.exports = new MainPage();
