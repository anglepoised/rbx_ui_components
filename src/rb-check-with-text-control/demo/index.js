define([
    '../index.js',
    './demo-ctrl',
    './demo-state',
    'components/rb-button'
], function (rbCheckWithTextControl, demoCtrl, demoState, rbButton) {
    var demo = angular
        .module('rb-check-with-text-control-demo', [
            rbCheckWithTextControl.name,
            rbButton.name
        ])
        .config(demoState)
        .controller('demo-rb-check-with-text-control-ctrl', demoCtrl);

    return demo;
});
