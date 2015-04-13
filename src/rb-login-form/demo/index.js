define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbLoginForm, demoCtrl, demoState) {
    var demo = angular
        .module('rb-login-form-demo', [
            rbLoginForm.name
        ])
        .config(demoState)
        .controller('demo-login-form-ctrl', demoCtrl);

    return demo;
});
