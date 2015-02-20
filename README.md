# RBX UI Components

A set of angular components.

## Dependencies

* [Git](http://git-scm.com)
* [Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* [Gulp](http://gulpjs.com/): `npm install -g gulp`.
* [Bower](http://bower.io): `npm install -g bower`.
* [Selenium Server](https://www.npmjs.com/package/selenium-standalone): `npm install -g selenium-standalone`.
* [Protractor](https://www.npmjs.com/package/protractor): `npm install -g protractor`.

## Getting started

* Install git: (http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Checkout the repo: `git clone git@github.com:rockabox/rbx_ui_components && cd rbx_ui_components`
* Install project dependencies: `npm install`.
* Install bower packages: `bower install`.
* Run `gulp watch`. (For production environment run `gulp watch --release`)

## Running functional tests with Protractor

* Make sure you have installed a Selenium Server and chromedriver. Follow the instructions at:
  https://www.npmjs.com/package/selenium-standalone
* Make sure you point to the Selenium .jar in the protractor config file (protractor-base.conf.js)
* Run `gulp func-tests`
