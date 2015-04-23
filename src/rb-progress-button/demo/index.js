define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbProgressButton, demoCtrl, demoState) {
    var demo = angular
        .module('rb-progress-button-demo', [
            rbProgressButton.name
        ])
        .config(demoState)
        .controller('demo-rb-progress-button-ctrl', demoCtrl);

    return demo;
});
