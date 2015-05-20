define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbSelectControl, demoCtrl, demoState) {
    var demo = angular
        .module('rb-select-control-demo', [
            rbSelectControl.name
        ])
        .config(demoState)
        .controller('demo-rb-select-control-ctrl', demoCtrl);

    return demo;
});
