define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbRadioControl, demoCtrl, demoState) {
    var demo = angular
        .module('rb-radio-control-demo', [
            rbRadioControl.name
        ])
        .config(demoState)
        .controller('demo-rb-radio-control-ctrl', demoCtrl);

    return demo;
});
