define([
    '../rb-button',
    '../rb-text-control',
    './rb-system-message-directive',
    './rb-system-message.css'
], function (rbButton, rbTextControl, rbSystemMessageDirective, css) {
    /**
     * @ngdoc module
     * @name rb-system-message
     * @description
     *
     * rbSystemMessage
     *
     */
    var rbSystemMessage = angular
        .module('rb-system-message', [
            rbButton.name,
            rbTextControl.name
        ])
        .directive('rbSystemMessage', rbSystemMessageDirective);

    return rbSystemMessage;

});
