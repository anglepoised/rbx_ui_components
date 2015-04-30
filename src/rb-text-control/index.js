define([
    './rb-text-control-directive',
    './custom-validation-directive',
    'angular-elastic',
    './rb-text-control.css'
], function (rbTextControlDirective, customValidationDirective, ngElastic, css) {
    /**
     * @ngdoc module
     * @name rb-text-control
     * @description
     *
     * rbTextControl
     *
     */
    var rbTextControl = angular
        .module('rb-text-control', [
            'monospaced.elastic'
        ])
        .directive('customValidation', customValidationDirective)
        .directive('rbTextControl', rbTextControlDirective);

    return rbTextControl;

});
