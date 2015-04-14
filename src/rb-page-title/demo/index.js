define([
    '../index.js',
    './demo-ctrl',
    './demo-state',
    '../../rb-header'
], function (rbPageTitle, demoCtrl, demoState, rbHeader) {
    var demo = angular
        .module('rb-page-title-demo', [
            rbPageTitle.name
        ])
        .config(demoState)
        .controller('header-ctrl', demoCtrl);

    return demo;
});
