define([
    './rb-warning-messages-directive',
    './rb-warning-messages.css'
], function (rbWarningMessagesDirective) {
    /**
     * @ngdoc module
     * @name rb-warning-messages
     * @description
     *
     * rbWarningMessages
     *
     */
    var rbWarningMessages = angular
        .module('rb-warning-messages', [])
        .directive('rbWarningMessages', rbWarningMessagesDirective);

    return rbWarningMessages;

});
