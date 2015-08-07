define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rgTextControl, demoCtrl, demoState) {
    var demo = angular
        .module('rg-text-control-demo', [
            rgTextControl.name
        ])
        .config(demoState)
        .controller('demo-rg-text-control-ctrl', demoCtrl);

    return demo;
});
