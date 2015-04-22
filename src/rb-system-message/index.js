define([
    './rb-system-message-directive',
    './rb-system-message.css',
    'components/rb-button',
    'components/rb-text-control'
], function (rbSystemMessageDirective, css, rbButton, rbTextControl) {
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
