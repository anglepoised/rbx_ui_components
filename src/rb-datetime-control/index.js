define([
    'angular-strap',
    './rb-datetime-control-directive',
    './rb-datetime-control-run',
    './rb-datetime-control.css'
], function (angularStrap, rbDatetimeControlDirective, rbDatetimeControlRun, css) {
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
        .config(function ($datepickerProvider, $timepickerProvider) {
            angular.extend($datepickerProvider.defaults, {
                dateFormat: 'dd/MM/yyyy'
            });

            angular.extend($timepickerProvider.defaults, {
                timeFormat: 'HH:mm'
            });
        })
        .run(rbDatetimeControlRun)
        .directive('rbDatetimeControl', rbDatetimeControlDirective);

    return rbDatetimeControl;

});
