define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDatetimeControl, demoCtrl, demoState) {
    var demo = angular
        .module('rb-datetime-control-demo', [
            rbDatetimeControl.name
        ])
        .config(demoState)
        .controller('demo-rb-datetime-control-ctrl', demoCtrl);

    return demo;
});
