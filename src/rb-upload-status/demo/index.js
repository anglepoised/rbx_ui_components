define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbUploadStatus, demoCtrl, demoState) {
    var demo = angular
        .module('rb-upload-status-demo', [
            rbUploadStatus.name
        ])
        .config(demoState)
        .controller('demo-rb-upload-status-ctrl', demoCtrl);

    return demo;
});
