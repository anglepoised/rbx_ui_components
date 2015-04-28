define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbGrid, demoCtrl, demoState) {
    var demo = angular
        .module('rb-grid-demo', [
            rbGrid.name
        ])
        .config(demoState)
        .controller('demo-rb-grid-ctrl', demoCtrl);

    return demo;
});
