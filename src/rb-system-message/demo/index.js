define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbSystemMessage, demoCtrl, demoState) {
    var demo = angular
        .module('rb-system-message-demo', [
            rbSystemMessage.name
        ])
        .config(demoState)
        .controller('demo-rb-system-message-ctrl', demoCtrl);

    return demo;
});
