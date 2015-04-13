define([
    './rb-login-form-directive'
], function (rbLoginFormDirective) {
    /**
     * @ngdoc module
     * @name rb-login-form
     * @description
     *
     * rbLoginForm
     *
     */
    var rbLoginForm = angular
        .module('rb-login-form', [])
        .directive('rbLoginForm', rbLoginFormDirective);

    return rbLoginForm;

});
