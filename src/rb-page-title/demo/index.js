define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbPageTitle, demoCtrl, demoState) {
    var demo = angular
        .module('rb-page-title-demo', [
            rbPageTitle.name
        ])
        .config(demoState)
        .controller('header-ctrl', demoCtrl);

    return demo;
});
