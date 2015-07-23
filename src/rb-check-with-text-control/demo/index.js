define([
    'ui-components/rb-button',
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbButton, rbCheckWithTextControl, demoCtrl, demoState) {
    var demo = angular
        .module('rb-check-with-text-control-demo', [
            rbCheckWithTextControl.name,
            rbButton.name
        ])
        .config(demoState)
        .controller('demo-rb-check-with-text-control-ctrl', demoCtrl);

    return demo;
});
