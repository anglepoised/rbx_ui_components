define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbCheckControl, demoCtrl, demoState) {
    var demo = angular
        .module('rb-check-control-demo', [
            rbCheckControl.name
        ])
        .config(demoState)
        .controller('demo-rb-check-control-ctrl', demoCtrl);

    return demo;
});
