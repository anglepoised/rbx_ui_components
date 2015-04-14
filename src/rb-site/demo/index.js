define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbSite, demoCtrl, demoState) {
    var demo = angular
        .module('rb-site-demo', [rbSite.name])
        .config(demoState)
        .controller('site-demo-ctrl', demoCtrl);

    return demo;
});
