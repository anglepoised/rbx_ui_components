define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbBoxSelector, demoCtrl, demoState) {
    var demo = angular
        .module('rb-box-selector-demo', [
            rbBoxSelector.name
        ])
        .config(demoState)
        .controller('demo-rb-box-selector-ctrl', demoCtrl);

    return demo;
});
