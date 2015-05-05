define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbOverlayPanel, demoCtrl, demoState) {
    var demo = angular
        .module('rb-overlay-panel-demo', [
            rbOverlayPanel.name
        ])
        .config(demoState)
        .controller('demo-rb-overlay-panel-ctrl', demoCtrl);

    return demo;
});
