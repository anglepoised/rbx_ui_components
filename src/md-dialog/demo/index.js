define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (mdDialog, demoCtrl, demoState) {
    var demo = angular
        .module('md-dialog-demo', [
            mdDialog.name
        ])
        .config(demoState)
        .controller('demo-md-dialog-ctrl', demoCtrl);

    return demo;
});
