define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbActionBar, demoCtrl, demoState) {
    var demo = angular
        .module('rb-action-bar-demo', [
            rbActionBar.name
        ])
        .config(demoState)
        .controller('demo-rb-action-bar-ctrl', demoCtrl);

    return demo;
});
