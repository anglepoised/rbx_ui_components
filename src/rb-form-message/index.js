define([
    './rb-form-message-directive',
    './rb-form-message.css'
], function (rbFormMessageDirective, css) {
    /**
     * @ngdoc module
     * @name rb-form-message
     * @description
     *
     * rbFormMessage
     *
     */
    var rbFormMessage = angular
        .module('rb-form-message', [])
        .directive('rbFormMessage', rbFormMessageDirective);

    return rbFormMessage;

});
