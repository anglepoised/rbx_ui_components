define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbCurrency, demoCtrl, demoState) {
    var demo = angular
        .module('rb-currency-demo', [
            rbCurrency.name
        ])
        .config(demoState)
        .controller('demo-currency-ctrl', demoCtrl);

    return demo;
});