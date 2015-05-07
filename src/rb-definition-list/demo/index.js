define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDefinitionList, demoCtrl, demoState) {
    var demo = angular
        .module('rb-definition-list-demo', [
            rbDefinitionList.name
        ])
        .config(demoState)
        .controller('demo-rb-definition-list-ctrl', demoCtrl);

    return demo;
});
