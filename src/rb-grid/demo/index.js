define([
    '../index.js',
    './demo-ctrl',
    './demo-state',
    'components/rb-demo-block'
], function (rbGrid, demoCtrl, demoState, rbDemoBlock) {
    var demo = angular
        .module('rb-grid-demo', [
            rbDemoBlock.name,
            rbGrid.name
        ])
        .config(demoState)
        .controller('demo-rb-grid-ctrl', demoCtrl);

    return demo;
});
