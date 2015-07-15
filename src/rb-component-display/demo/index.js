define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbComponentDisplay, demoCtrl, demoState) {
    var demo = angular
        .module('rb-component-display-demo', [
            rbComponentDisplay.name
        ])
        .config(demoState)
        .controller('demo-rb-component-display-ctrl', demoCtrl);

    return demo;
});
