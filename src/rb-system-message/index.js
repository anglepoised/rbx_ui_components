define([
    './rb-system-message-directive',
    './rb-system-message.css'
], function (rbSystemMessageDirective, css) {
    /**
     * @ngdoc module
     * @name rb-system-message
     * @description
     *
     * rbSystemMessage
     *
     */
    var rbSystemMessage = angular
        .module('rb-system-message', [])
        .directive('rbSystemMessage', rbSystemMessageDirective);

    return rbSystemMessage;

});
