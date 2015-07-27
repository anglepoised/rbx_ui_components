define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDivider, demoCtrl, demoState) {
    var demo = angular
        .module('rb-divider-demo', [
            rbDivider.name
        ])
        .config(demoState)
        .controller('demo-rb-divider-ctrl', demoCtrl);

    return demo;
});
