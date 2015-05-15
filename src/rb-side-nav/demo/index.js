define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbSideNav, demoCtrl, demoState) {
    var demo = angular
        .module('rb-side-nav-demo', [
            rbSideNav.name
        ])
        .config(demoState)
        .controller('demo-rb-side-nav-ctrl', demoCtrl);

    return demo;
});
