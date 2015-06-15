define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDeepSearch, demoCtrl, demoState) {
    var demo = angular
        .module('rb-deep-search-demo', [
            rbDeepSearch.name
        ])
        .config(demoState)
        .controller('demo-rb-deep-search-ctrl', demoCtrl);

    return demo;
});
