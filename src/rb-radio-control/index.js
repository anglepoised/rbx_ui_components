define([
    '../rb-icon',
    './rb-radio-control-directive',
    './rb-radio-control.css'
], function (rbIcon, rbRadioControlDirective, css) {
    /**
     * @ngdoc module
     * @name rb-radio-control
     * @description
     *
     * rbRadioControl
     *
     */
    var rbRadioControl = angular
        .module('rb-radio-control', [rbIcon.name])
        .directive('rbRadioControl', rbRadioControlDirective);

    return rbRadioControl;

});
