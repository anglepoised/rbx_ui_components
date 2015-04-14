define([
    '../index.js',
    './demo-ctrl',
    './demo-state',
    '../../rb-header',
    '../../rb-nav-bar',
    '../../rb-icon',
    '../../rb-user'
], function (rbPageHeader, demoCtrl, demoState, rbHeader, rbNavBar, rbIcon, rbUser) {
    var demo = angular
        .module('rb-page-header-demo', [
            rbPageHeader.name,
            rbHeader.name,
            rbNavBar.name,
            rbIcon.name,
            rbUser.name
        ])
        .config(demoState)
        .controller('page-header-demo-ctrl', demoCtrl);

    return demo;
});
