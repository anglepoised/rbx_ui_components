define([
    '../index.js',
    './demo-ctrl',
    './demo-state',
    '../../rb-header',
    '../../rb-nav-bar',
    '../../rb-icon',
    '../../rb-user'
], function (rgHeader, demoCtrl, demoState, rbHeader, rbNavBar, rbIcon, rbUser) {
    var demo = angular
        .module('rg-header-demo', [
            rgHeader.name,
            rbHeader.name,
            rbNavBar.name,
            rbIcon.name,
            rbUser.name
        ])
        .config(demoState)
        .controller('page-header-demo-ctrl', demoCtrl);

    return demo;
});
