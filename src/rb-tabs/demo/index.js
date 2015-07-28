define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbTabs, demoCtrl, demoState) {
    var demo = angular
        .module('rb-tabs-demo', [
            rbTabs.name
        ])
        .config(demoState)
        .controller('demo-rb-tabs-ctrl', demoCtrl);

    return demo;
});
