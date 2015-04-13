define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbBadge, demoCtrl, demoState) {
    var demo = angular
        .module('rb-badge-demo', [
            rbBadge.name,
        ])
        .config(demoState)
        .controller('demo-rb-badge-ctrl', demoCtrl);

    return demo;
});
