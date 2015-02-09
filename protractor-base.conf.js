/**
 * Base Protractor config. Not used directly in any testing environment but is
 * extended by the functional and integration test configs.
 */

exports.config = {
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
    multiCapabilities: [{
        browserName: 'chrome'
    }],
    rootElement: 'body',
    onPrepare: function () {
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);
    },
    suites: {
        all: 'tests/js/functional/**/*.spec.js',
        app: 'tests/js/functional/*.spec.js'
    },
    jasmineNodeOpts: {
        showColors: true
    }
};
