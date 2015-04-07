define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbFooter, demoCtrl, demoState) {
    var demo = angular
        .module('rb-footer-demo', ['rb-footer'])
        .config(demoState)
        .controller('footer-ctrl', demoCtrl);

    return demo;
});