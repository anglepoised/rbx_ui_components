define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbHeader, demoCtrl, demoState) {
    var demo = angular
        .module('rb-header-demo', [rbHeader.name])
        .config(demoState)
        .controller('header-demo-ctrl', demoCtrl);

    return demo;
});
