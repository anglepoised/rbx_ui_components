define([
    '../index.js',
    './demo-ctrl',
    './demo-state',
    'components/rb-text-control'
], function (rbFieldset, demoCtrl, demoState, rbTextControl) {
    var demo = angular
        .module('rb-fieldset-demo', [
            rbFieldset.name,
            rbTextControl.name
        ])
        .config(demoState)
        .controller('demo-rb-fieldset-ctrl', demoCtrl);

    return demo;
});
