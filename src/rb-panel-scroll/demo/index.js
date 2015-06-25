define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbPanelScroll, demoCtrl, demoState) {
    var demo = angular
        .module('rb-panel-scroll-demo', [
            rbPanelScroll.name
        ])
        .config(demoState)
        .controller('demo-rb-panel-scroll-ctrl', demoCtrl);

    return demo;
});
