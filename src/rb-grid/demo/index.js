define([
    'ui-components/rb-demo-block',
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbDemoBlock, rbGrid, demoCtrl, demoState) {
    var demo = angular
        .module('rb-grid-demo', [
            rbDemoBlock.name,
            rbGrid.name
        ])
        .config(demoState)
        .controller('demo-rb-grid-ctrl', demoCtrl);

    return demo;
});
