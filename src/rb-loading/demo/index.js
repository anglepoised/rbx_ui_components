define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbLoading, demoCtrl, demoState) {
    var demo = angular
        .module('rb-loading-demo', [
            rbLoading.name
        ])
        .config(demoState)
        .controller('demo-rb-loading-ctrl', demoCtrl);

    return demo;
});
