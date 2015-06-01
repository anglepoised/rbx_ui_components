define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDateTimeDisplay, demoCtrl, demoState) {
    var demo = angular
        .module('rb-datetime-display-demo', [
            rbDateTimeDisplay.name
        ])
        .config(demoState)
        .controller('demo-datetime-display-ctrl', demoCtrl);

    return demo;
});
