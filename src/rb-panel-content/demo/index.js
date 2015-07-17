define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbPanelContent, demoCtrl, demoState) {
    var demo = angular
        .module('rb-panel-content-demo', [
            rbPanelContent.name
        ])
        .config(demoState)
        .controller('demo-rb-panel-content-ctrl', demoCtrl);

    return demo;
});
