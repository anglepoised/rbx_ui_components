define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbButton, demoCtrl, demoState) {
    var demo = angular
        .module('rb-button-demo', [
            rbButton.name
        ])
        .config(demoState)
        .controller('demo-ctrl', demoCtrl);

    return demo;
});
