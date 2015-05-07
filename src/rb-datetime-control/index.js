define([
    'angular-strap/dist/modules/date-formatter.js',
    'angular-strap/dist/modules/date-parser.js',
    'angular-strap/dist/modules/datepicker.js',
    'angular-strap/dist/modules/datepicker.tpl.js',
    'angular-strap/dist/modules/timepicker.js',
    'angular-strap/dist/modules/timepicker.tpl.js',
    'angular-strap/dist/modules/tooltip.js',
    'angular-strap/dist/modules/dimensions.js',
    './rb-datetime-control-directive',
    './rb-datetime-control-config',
    './rb-datetime-control.css'
], function (
    bsDateFormatter,
    bsDateParser,
    bsDatepicker,
    bsDatepickerTpl,
    bsTimepicker,
    bsTimepickerTpl,
    bsTooltip,
    bsDimensions,
    rbDatetimeControlDirective,
    rbDatetimeControlConfig,
    css
) {
    /**
     * @ngdoc module
     * @name rb-datetime-control
     * @description
     *
     * rbDatetimeControl
     *
     */
    var rbDatetimeControl = angular
        .module('rb-datetime-control', [
            'mgcrea.ngStrap.datepicker',
            'mgcrea.ngStrap.timepicker'
        ])
        .config(rbDatetimeControlConfig)
        .directive('rbDatetimeControl', rbDatetimeControlDirective);

    return rbDatetimeControl;

});
