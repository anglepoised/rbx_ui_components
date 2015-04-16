define([
    './rb-login-form-directive',
    'components/rb-button',
    'components/rb-icon',
    'components/rb-text-control',
    './rb-login-form.css'
], function (rbLoginFormDirective, rbButton, rbIcon, rbTextControl, css) {
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
            rbTextControl.name
        ])
        .directive('rbLoginForm', rbLoginFormDirective);

    return rbLoginForm;

});
