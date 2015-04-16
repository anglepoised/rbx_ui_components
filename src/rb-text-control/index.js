define([
    './rb-text-control-directive',
    './custom-validation-directive',
    './rb-text-control.css'
], function (rbTextControlDirective, customValidationDirective, css) {
    /**
     * @ngdoc module
     * @name rb-text-control
     * @description
     *
     * rbTextControl
     *
     */
    var rbTextControl = angular
        .module('rb-text-control', [])
        .directive('customValidation', customValidationDirective)
        .directive('rbTextControl', rbTextControlDirective);

    return rbTextControl;

});
