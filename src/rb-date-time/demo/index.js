define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDateTime, demoCtrl, demoState) {
    var demo = angular
        .module('rb-date-time-demo', [
            rbDateTime.name
        ])
        .config(demoState)
        .controller('demo-ctrl', demoCtrl);

    return demo;
});
