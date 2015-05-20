define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbSidebarScrollspy, demoCtrl, demoState) {
    var demo = angular
        .module('rb-sidebar-scrollspy-demo', [
            rbSidebarScrollspy.name
        ])
        .config(demoState)
        .controller('demo-rb-sidebar-scrollspy-ctrl', demoCtrl);

    return demo;
});
