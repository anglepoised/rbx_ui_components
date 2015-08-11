define([
    './rg-text-control-directive',
    './custom-validation-directive',
    'angular-elastic',
    './rg-text-control.css'
], function (rgTextControlDirective, customValidationDirective, ngElastic, css) {
    /**
     * @ngdoc module
     * @name rg-text-control
     * @description
     *
     * rgTextControl
     *
     */
    var rgTextControl = angular
        .module('rg-text-control', [
            'monospaced.elastic'
        ])
        .directive('rgTextControl', rgTextControlDirective)
        .directive('customValidation', customValidationDirective);

    return rgTextControl;

});
