define([
    '../index.js',
    './demo-ctrl',
    './demo-state'
], function (rbWarningMessages, demoCtrl, demoState) {
    var demo = angular
        .module('rb-warning-messages-demo', [
            rbWarningMessages.name
        ])
        .config(demoState)
        .value('warningStates', {
            // A map of all available WARNING_IDENTIFIER: UI_ROUTER_STATE
            // (key:value) pairs
            // Everytime a user clicks an issue link on any warning message,
            // will be a redirection to a UI-Router state.
            // UI-Router states will be determined by this key:value map
            // with key: WARNING_IDENTIFIER
            // STATES FOR DEMO PURPOSES ONLY
            'PARTIAL_TRACKING': 'tracking',
            'OTHER_STATE': 'other_state'
        })
        .controller('demo-warning-messages-ctrl', demoCtrl);

    return demo;
});
