define([
    '../index.js',
    './demo-ctrl',
    './demo-group-ctrl',
    './demo-state'
], function (rbCheckControl, demoCtrl, demoGroupCtrl, demoState) {
    var demo = angular
        .module('rb-check-control-demo', [
            rbCheckControl.name
        ])
        .config(demoState)
        .controller('demo-rb-check-control-ctrl', demoCtrl)
        .controller('demo-rb-check-control-group-ctrl', demoGroupCtrl);

    return demo;
});
