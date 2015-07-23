define([
    'ui-components/rb-text-control',
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbTextControl, rbFieldset, demoCtrl, demoState) {
    var demo = angular
        .module('rb-fieldset-demo', [
            rbFieldset.name,
            rbTextControl.name
        ])
        .config(demoState)
        .controller('demo-rb-fieldset-ctrl', demoCtrl);

    return demo;
});
