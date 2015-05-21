define([
    './rb-select-control-directive',
    './rb-select-control.css'
], function (rbSelectControlDirective, css) {
    /**
     * @ngdoc module
     * @name rb-select-control
     * @description
     *
     * rbSelectControl
     *
     */
    var rbSelectControl = angular
        .module('rb-select-control', [])
        .directive('rbSelectControl', rbSelectControlDirective);

    return rbSelectControl;

});
