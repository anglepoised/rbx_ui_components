define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbModalConfirm, demoCtrl, demoState) {
    var demo = angular
        .module('rb-modal-confirm-demo', [
            rbModalConfirm.name
        ])
        .config(demoState)
        .controller('demo-rb-modal-confirm-ctrl', demoCtrl);

    return demo;
});
