define([
    '../index.js',
    './demo-ctrl',
    './demo-state',
    '../../rb-site'
], function (rbMain, demoCtrl, demoState, rbSite) {
    var demo = angular
        .module('rb-main-demo', [
            rbMain.name,
            rbSite.name
        ])
        .config(demoState)
        .controller('main-demo-ctrl', demoCtrl);

    return demo;
});
