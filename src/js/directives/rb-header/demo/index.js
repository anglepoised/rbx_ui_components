define([
    '../index.js',
    './demo-ctrl',
    './demo-state',
    '../../rb-nav-bar',
    '../../rb-icon',
    '../../rb-user'
], function (rbHeader, demoCtrl, demoState, rbNavBar, rbIcon, rbUser) {
    var demo = angular
        .module('rb-header-demo', [
            rbHeader.name,
            rbNavBar.name,
            rbIcon.name,
            rbUser.name
        ])
        .config(demoState)
        .controller('header-ctrl', demoCtrl);

    return demo;
});