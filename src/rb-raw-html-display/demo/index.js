define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbRawHtmlDisplay, demoCtrl, demoState) {
    var demo = angular
        .module('rb-raw-html-display-demo', [
            rbRawHtmlDisplay.name
        ])
        .config(demoState)
        .controller('demo-rb-raw-html-display-ctrl', demoCtrl);

    return demo;
});
