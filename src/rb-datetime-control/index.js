define([
    'angular-strap',
    './rb-datetime-control-directive',
    './rb-datetime-control-run',
    './rb-datetime-control-config',
    './rb-datetime-control.css'
], function (angularStrap, rbDatetimeControlDirective, rbDatetimeControlRun, rbDatetimeControlConfig, css) {
    /**
     * @ngdoc module
     * @name rb-datetime-control
     * @description
     *
     * rbDatetimeControl
     *
     */
    var rbDatetimeControl = angular
        .module('rb-datetime-control', ['mgcrea.ngStrap'])
        .config(rbDatetimeControlConfig)
        .run(rbDatetimeControlRun)
        .directive('rbDatetimeControl', rbDatetimeControlDirective);

    return rbDatetimeControl;

});
