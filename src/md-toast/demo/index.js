define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (mdToast, demoCtrl, demoState) {
    var demo = angular
        .module('md-toast-demo', [
            mdToast.name
        ])
        .config(demoState)
        .controller('demo-md-toast-ctrl', demoCtrl);

    return demo;
});
