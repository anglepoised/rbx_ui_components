define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbOverlayModeless, demoCtrl, demoState) {
    var demo = angular
        .module('rb-overlay-modeless-demo', [
            rbOverlayModeless.name
        ])
        .config(demoState)
        .controller('demo-rb-overlay-modeless-ctrl', demoCtrl);

    return demo;
});
