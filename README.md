# RBX UI Components [![Build Status](https://travis-ci.org/rockabox/rbx_ui_components.svg?branch=master)](https://travis-ci.org/rockabox/rbx_ui_components) [![Dependency Status](https://david-dm.org/rockabox/rbx_ui_components.svg)](https://david-dm.org/rockabox/rbx_ui_components)

Rockabox's UI components, built using [AngularJS](https://angularjs.org/), [PostCSS](https://github.com/postcss/postcss), [SUIT CSS](http://suitcss.github.io/) and [webpack](http://webpack.github.io/).

## Getting Started

1. [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).
2. Install global packages ([Bower](http://bower.io/), [Grunt](http://gruntjs.com/), [Webpack](http://webpack.github.io/) and [Webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)):

    ```sh
    npm install -g bower grunt-cli webpack webpack-dev-server
    ```

3. Clone project and install dependencies:

    ```sh
    git clone git@github.com:rockabox/rbx_ui_components
    cd rbx_ui_components
    npm install && bower install
    ```

4. Run the dev server:

    ```sh
    npm start
    ```

5. Browse to <http://localhost:7000/>.

## Running Unit Tests

Run with:

```sh
grunt unit
```

Do not run unit tests directly with Karma; the grunt tasks are required
to set the timezone correctly for PhantomJS.

## Guidelines For Making New Components

Use the [rb-component Yeoman generator](https://github.com/rockabox/generator-rb-component) when starting a new component.

Keep the structure and design pattern of new components consistent with those that have come before.

### Angular Directive Guidelines

* Use attributes to pass modifiers and single line contents (titles, labels etc.) into an isolated scope.
  For an example, look at the header attribute in `rb-data-summary-item`
* Use transclusion where the main content of a directive needs to be flexible enough to handle an unknown structure.
  For an example, see the transclusion in `rb-data-summary-item`.
* Follow a wrapper & item pattern for components that need multiple transclusion. For an example see the
  `rb-data-summary` and `rb-data-summary-item` directives.
* Split large functions (like link functions) into separate Webpack modules to keep things simple. For an example see
  `rb-currency-link.js`
* Provide a component demo that shows all combinations of different modifiers and settings.
