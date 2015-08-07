define([
    './rg-text-control-directive',
    './rg-text-control.css'
], function (rgTextControlDirective, css) {
    /**
     * @ngdoc module
     * @name rg-text-control
     * @description
     *
     * rgTextControl
     *
     */
    var rgTextControl = angular
        .module('rg-text-control', [])
        .directive('rgTextControl', rgTextControlDirective);

    return rgTextControl;

});
