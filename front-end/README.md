#### Weekly Planner - AngularJS Front-end

This folder contains the front-end for the Weekly Planner project, written in AngularJS.
Usage instructions in this readme assume have changed into the `front-end` directory.

### Running tests

#### Unit tests

This project uses Karma for its JS unit tests.
Tests can be ran, and auto-ran with changes to files, with: `karma start test/unit-conf.js`.

#### End-to-end tests

The e2e tests are written to use Protractor, a runner specifically written with AngularJS in mind.
First you'll need to setup your environment to be able to run the tests:

##### required setup 
1. `npm install -g protractor`
2. `webdriver-manager update`

##### running the e2e tests

1. `webdriver-manager start`
2. `protractor test/e2e-conf.js`
