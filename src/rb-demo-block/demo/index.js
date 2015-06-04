define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDemoBlock, demoCtrl, demoState) {
    var demo = angular
        .module('rb-demo-block-demo', [
            rbDemoBlock.name
        ])
        .config(demoState)
        .controller('demo-rb-demo-block-ctrl', demoCtrl);

    return demo;
});
