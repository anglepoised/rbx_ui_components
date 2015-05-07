# RBX UI Components

A set of angular components.

## Dependencies

* [Git](http://git-scm.com)
* [Grunt](http://gruntjs.com/): `npm install -g grunt`.
* [Bower](http://bower.io): `npm install -g bower`.
* [Selenium Server](https:/* [Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
/www.npmjs.com/package/selenium-standalone): `npm install -g selenium-standalone`.
* [Protractor](https://www.npmjs.com/package/protractor): `npm install -g protractor`.
* [Webpack](http://webpack.github.io): `npm install -g webpack`.
* [Webpack-dev-server](http://webpack.github.io): `npm install -g webpack-dev-server`.

## Getting started

* Install git: (http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Checkout the repo: `git clone git@github.com:rockabox/rbx_ui_components && cd rbx_ui_components`
* Install project dependencies: `npm install`.
* Install bower packages: `bower install`.
* Run `npm start`.

## Running unit tests

Use grunt to run unit tests:

	grunt unit

It's important that you run the unit tests via this command and not direclty with Karma as the grunt will set the enviromental timezone for phantomJS browser.

## Running functional tests with Protractor

* Make sure you have installed a Selenium Server and chromedriver. Follow the instructions at:
  https://www.npmjs.com/package/selenium-standalone
* Make sure you point to the Selenium .jar in the protractor config file (protractor-base.conf.js)
* Run `gulp func-tests`
