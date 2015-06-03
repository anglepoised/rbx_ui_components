define([
    './rb-check-with-text-control-directive',
    './rb-check-with-text-control.css'
], function (rbCheckWithTextControlDirective, css) {
    /**
     * @ngdoc module
     * @name rb-check-with-text-control
     * @description
     *
     * rbCheckWithTextControl
     *
     */
    var rbCheckWithTextControl = angular
        .module('rb-check-with-text-control', [])
        .directive('rbCheckWithTextControl', rbCheckWithTextControlDirective);

    return rbCheckWithTextControl;

});
