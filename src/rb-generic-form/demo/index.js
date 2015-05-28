define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbGenericForm, demoCtrl, demoState) {
    var demo = angular
        .module('rb-generic-form-demo', [
            rbGenericForm.name
        ])
        .config(demoState)
        .controller('demo-rb-generic-form-ctrl', demoCtrl);

    return demo;
});
