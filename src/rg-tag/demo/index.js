define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rgTag, demoCtrl, demoState) {
    var demo = angular
        .module('rg-tag-demo', [
            rgTag.name
        ])
        .config(demoState)
        .controller('demo-tag-ctrl', demoCtrl);

    return demo;
});
