define([
    './rb-warning-messages-directive',
    'components/rb-icon',
    './rb-warning-messages.css'
], function (rbWarningMessagesDirective, rbIcon, css) {
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
