define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDataSummary, demoCtrl, demoState) {
    var demo = angular
        .module('rb-data-summary-demo', [
            rbDataSummary.name
        ])
        .config(demoState)
        .controller('demo-rb-data-summary-ctrl', demoCtrl);

    return demo;
});
