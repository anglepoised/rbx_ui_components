define([
    './rb-text-control-directive',
    './custom-validation-directive'
], function (rbTextControlDirective, customValidationDirective) {
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
