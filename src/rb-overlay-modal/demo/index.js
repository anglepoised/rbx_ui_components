define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbOverlayModal, demoCtrl, demoState) {
    var demo = angular
        .module('rb-overlay-modal-demo', [
            rbOverlayModal.name
        ])
        .config(demoState)
        .controller('demo-rb-overlay-modal-ctrl', demoCtrl);

    return demo;
});
