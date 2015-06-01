define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbCurrencyDisplay, demoCtrl, demoState) {
    var demo = angular
        .module('rb-currency-display-demo', [
            rbCurrencyDisplay.name
        ])
        .config(demoState)
        .controller('demo-currency-display-ctrl', demoCtrl);

    return demo;
});
