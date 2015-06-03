define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbCheckWithTextControl, demoCtrl, demoState) {
    var demo = angular
        .module('rb-check-with-text-control-demo', [
            rbCheckWithTextControl.name
        ])
        .config(demoState)
        .controller('demo-rb-check-with-text-control-ctrl', demoCtrl);

    return demo;
});
