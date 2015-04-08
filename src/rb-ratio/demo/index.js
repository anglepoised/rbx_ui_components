define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbRatio, demoCtrl, demoState) {
    var demo = angular
        .module('rb-ratio-demo', [
            rbRatio.name
        ])
        .config(demoState)
        .controller('demo-rb-ratio-ctrl', demoCtrl);

    return demo;
});
