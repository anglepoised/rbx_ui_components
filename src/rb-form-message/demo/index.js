define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbFormMessage, demoCtrl, demoState) {
    var demo = angular
        .module('rb-form-message-demo', [
            rbFormMessage.name
        ])
        .config(demoState)
        .controller('demo-rb-form-message-ctrl', demoCtrl);

    return demo;
});
