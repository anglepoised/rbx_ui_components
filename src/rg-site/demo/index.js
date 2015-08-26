define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rgSite, demoCtrl, demoState) {
    var demo = angular
        .module('rg-site-demo', [rgSite.name])
        .config(demoState)
        .controller('site-demo-ctrl', demoCtrl);

    return demo;
});
