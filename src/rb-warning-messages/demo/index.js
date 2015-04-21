define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbWarningMessages, demoCtrl, demoState) {
    var demo = angular
        .module('rb-warning-messages-demo', [
            rbWarningMessages.name
        ])
        .config(demoState)
        .controller('demo-warning-messages-ctrl', demoCtrl);

    return demo;
});
