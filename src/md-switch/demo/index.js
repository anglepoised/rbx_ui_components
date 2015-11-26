define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (mdSwitch, demoCtrl, demoState) {
    var demo = angular
        .module('md-switch-demo', [
            mdSwitch.name
        ])
        .config(demoState)
        .controller('demo-md-switch-ctrl', demoCtrl);

    return demo;
});
