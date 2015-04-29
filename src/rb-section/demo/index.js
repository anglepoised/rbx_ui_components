define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbSection, demoCtrl, demoState) {
    var demo = angular
        .module('rb-section-demo', [
            rbSection.name
        ])
        .config(demoState)
        .controller('demo-rb-section-ctrl', demoCtrl);

    return demo;
});
