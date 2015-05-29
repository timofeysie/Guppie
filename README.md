## Guppy the Gulp Angular Seed

### Unit Tests

Unit tests are kept separately from the code they are testing.
So we use the karma-ng-html2js-preprocessor for deveopment.
Extra setup information may be needed from here:
https://github.com/karma-runner/karma-ng-html2js-preprocessor

To start the web server:
```
$ gulp serve
```

To run the unit tests with Karma, use the node task:
```
$ gulp test
```


### End to End Tests

These tests reside in the e2e directory.  They inclide separate .po.js files for each page under tests.  This is in accordance with the [Page Object Pattern] (https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ)

With the server running from the root directory, run:
```
$ cd app
$ webdriver-manager start
```
Then, in a separate terminal, run:
```
$ protractor protractor.conf.js
```

### Documentation

http://usejsdoc.org/about-configuring-jsdoc.html

### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

### In the Beginning

This project was created with the Yeoman Gulp Angular seed.  We used mainly defaults, and only included ng-resource for RESTful communication.
```
yo gulp-angular gulp-angular
```


