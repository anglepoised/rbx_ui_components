define([
    '../rb-icon',
    './rb-warning-messages-directive',
    './rb-warning-messages.css'
], function (rbIcon, rbWarningMessagesDirective, css) {
    /**
     * @ngdoc module
     * @name rb-warning-messages
     * @description
     *
     * rbWarningMessages
     *
     */
    var rbWarningMessages = angular
        .module('rb-warning-messages', [
            rbIcon.name
        ])
        .directive('rbWarningMessages', rbWarningMessagesDirective);

    return rbWarningMessages;

});
