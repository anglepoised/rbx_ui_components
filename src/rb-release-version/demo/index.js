define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbReleaseVersion, demoCtrl, demoState) {
    var demo = angular
        .module('rb-release-version-demo', [
            rbReleaseVersion.name
        ])
        .config(demoState)
        .controller('demo-rb-release-version-ctrl', demoCtrl);

    return demo;
});
