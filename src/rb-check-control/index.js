define([
    './rb-check-control-directive',
    './rb-check-control-select-all-directive',
    './rb-check-control.css'
], function (rbCheckControlDirective, rbCheckControlSelectAllDirective, css) {
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
        .directive('rbCheckControl', rbCheckControlDirective)
        .directive('rbCheckControlSelectAll', rbCheckControlSelectAllDirective);

    return rbCheckControl;

});
