define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbCheckWithTextControlGroup, demoCtrl, demoState) {
    var demo = angular
        .module('rb-check-with-text-control-group-demo', [
            rbCheckWithTextControlGroup.name
        ])
        .config(demoState)
        .controller('demo-rb-check-with-text-control-group-ctrl', demoCtrl);

    return demo;
});
