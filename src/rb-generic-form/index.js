define([
    './rb-generic-form-directive',
    './rb-generic-form.css'
], function (rbGenericFormDirective, css) {
    /**
     * @ngdoc module
     * @name rb-generic-form
     * @description
     *
     * rbGenericForm
     *
     */
    var rbGenericForm = angular
        .module('rb-generic-form', [])
        .directive('rbGenericForm', rbGenericFormDirective);

    return rbGenericForm;

});
