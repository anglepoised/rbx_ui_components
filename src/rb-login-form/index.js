define([
    '../rb-button',
    '../rb-icon',
    '../rb-form-message',
    '../rg-text-control',
    './rb-login-form-directive',
    './rb-login-form.css'
], function (rbButton, rbIcon, rbFormMessage, rgTextControl, rbLoginFormDirective, css) {
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
            rgTextControl.name
        ])
        .directive('rbLoginForm', rbLoginFormDirective);

    return rbLoginForm;

});
