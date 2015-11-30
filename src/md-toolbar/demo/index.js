define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (mdToolbar, demoCtrl, demoState) {
    var demo = angular
        .module('md-toolbar-demo', [
            mdToolbar.name
        ])
        .config(demoState)
        .controller('demo-md-toolbar-ctrl', demoCtrl);

    return demo;
});
