define([
    './rb-radio-control-directive',
    './rb-radio-control.css'
], function (rbRadioControlDirective, css) {
    /**
     * @ngdoc module
     * @name rb-radio-control
     * @description
     *
     * rbRadioControl
     *
     */
    var rbRadioControl = angular
        .module('rb-radio-control', [])
        .directive('rbRadioControl', rbRadioControlDirective);

    return rbRadioControl;

});
