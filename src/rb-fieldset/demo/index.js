define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbFieldset, demoCtrl, demoState) {
    var demo = angular
        .module('rb-fieldset-demo', [
            rbFieldset.name
        ])
        .config(demoState)
        .controller('demo-rb-fieldset-ctrl', demoCtrl);

    return demo;
});
