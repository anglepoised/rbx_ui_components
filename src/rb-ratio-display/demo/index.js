define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbRatioDisplay, demoCtrl, demoState) {
    var demo = angular
        .module('rb-ratio-display-demo', [
            rbRatioDisplay.name
        ])
        .config(demoState)
        .controller('demo-rb-ratio-display-ctrl', demoCtrl);

    return demo;
});
