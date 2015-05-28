define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbScrollspy, demoCtrl, demoState) {
    var demo = angular
        .module('rb-scrollspy-demo', [
            rbScrollspy.name
        ])
        .config(demoState)
        .controller('demo-rb-scrollspy-ctrl', demoCtrl);

    return demo;
});
