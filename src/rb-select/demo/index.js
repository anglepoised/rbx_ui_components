define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbSelect, demoCtrl, demoState) {
    var demo = angular
        .module('rb-select-demo', [
            rbSelect.name
        ])
        .config(demoState)
        .controller('demo-rb-select-ctrl', demoCtrl);

    return demo;
});
