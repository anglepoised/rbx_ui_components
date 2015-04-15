define([
    './rb-date-time-directive',
    './rb-date-time.css'
], function (rbDateTimeDirective, css) {
    /**
     * @ngdoc module
     * @name rb-date-time
     * @description
     *
     * rbDateTime
     *
     */
    var rbDateTime = angular
        .module('rb-date-time', [])
        .directive('rbDateTime', rbDateTimeDirective);

    return rbDateTime;

});
