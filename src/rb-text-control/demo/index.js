define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbTextControl, demoCtrl, demoState) {
    var demo = angular
        .module('rb-text-control-demo', [
            rbTextControl.name
        ])
        .config(demoState)
        .controller('demo-text-control-ctrl', demoCtrl);

    return demo;
});
