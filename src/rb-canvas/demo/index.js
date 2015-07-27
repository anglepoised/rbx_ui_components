define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbCanvas, demoCtrl, demoState) {
    var demo = angular
        .module('rb-canvas-demo', [
            rbCanvas.name
        ])
        .config(demoState)
        .controller('demo-rb-canvas-ctrl', demoCtrl);

    return demo;
});
