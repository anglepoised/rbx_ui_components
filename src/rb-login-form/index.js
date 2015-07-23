define([
    '../rb-button',
    '../rb-icon',
    '../rb-form-message',
    '../rb-text-control',
    './rb-login-form-directive',
    './rb-login-form.css'
], function (rbButton, rbIcon, rbFormMessage, rbTextControl, rbLoginFormDirective, css) {
    /**
     * @ngdoc module
     * @name rb-login-form
     * @description
     *
     * rbLoginForm
     *
     */
    var rbLoginForm = angular
        .module('rb-login-form', [
            rbButton.name,
            rbIcon.name,
            rbFormMessage.name,
            rbTextControl.name
        ])
        .directive('rbLoginForm', rbLoginFormDirective);

    return rbLoginForm;

});
