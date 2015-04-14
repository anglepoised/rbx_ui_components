define([
    '../index.js',
    './demo-ctrl',
    './demo-state',
    '../../rb-nav-bar',
    '../../rb-icon',
    '../../rb-user'
], function (rbPageHeader, demoCtrl, demoState, rbNavBar, rbIcon, rbUser) {
    var demo = angular
        .module('rb-page-header-demo', [
            rbPageHeader.name,
            rbNavBar.name,
            rbIcon.name,
            rbUser.name
        ])
        .config(demoState)
        .controller('page-header-demo-ctrl', demoCtrl);

    return demo;
});
