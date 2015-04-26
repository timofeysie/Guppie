## Gulp Angular Seed

### Unit Tests

Unit tests are kept separatemly from the code they are testing.
So we use the karma-ng-html2js-preprocessor for deveopment.
Extra setup information may be needed from here:
https://github.com/karma-runner/karma-ng-html2js-preprocessor


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

We used mainly defaults, and only included ng-resource for RESTful communication.
```
yo gulp-angular gulp-angular
```


