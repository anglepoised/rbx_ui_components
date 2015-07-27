define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbEditorWrapper, demoCtrl, demoState) {
    var demo = angular
        .module('rb-editor-wrapper-demo', [
            rbEditorWrapper.name
        ])
        .config(demoState)
        .controller('demo-rb-editor-wrapper-ctrl', demoCtrl);

    return demo;
});
