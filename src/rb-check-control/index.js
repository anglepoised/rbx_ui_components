define([
    './rb-check-control-directive',
    './rb-check-control.css'
], function (rbCheckControlDirective, css) {
    /**
     * @ngdoc module
     * @name rb-check-control
     * @description
     *
     * rbCheckControl
     *
     */
    var rbCheckControl = angular
        .module('rb-check-control', [])
        .directive('rbCheckControl', rbCheckControlDirective);

    return rbCheckControl;

});
