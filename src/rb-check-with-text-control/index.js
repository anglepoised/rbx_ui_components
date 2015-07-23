define([
    '../rb-check-control',
    '../rb-text-control',
    './rb-check-with-text-control-directive',
    './rb-check-with-text-control.css'
], function (rbCheckControl, rbTextControl, rbCheckWithTextControlDirective, css) {
    /**
     * @ngdoc module
     * @name rb-check-with-text-control
     * @description
     *
     * rbCheckWithTextControl
     *
     */
    var rbCheckWithTextControl = angular
        .module('rb-check-with-text-control', [
            rbCheckControl.name,
            rbTextControl.name
        ])
        .directive('rbCheckWithTextControl', rbCheckWithTextControlDirective);

    return rbCheckWithTextControl;

});
