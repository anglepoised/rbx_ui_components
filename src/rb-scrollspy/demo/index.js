define([
    'components/rb-deep-search',
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDeepSearch, rbScrollspy, demoCtrl, demoState) {
    var demo = angular
        .module('rb-scrollspy-demo', [
            rbDeepSearch.name,
            rbScrollspy.name
        ])
        .config(demoState)
        .controller('demo-rb-scrollspy-ctrl', demoCtrl);

    return demo;
});
