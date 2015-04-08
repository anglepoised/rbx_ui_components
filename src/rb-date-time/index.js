define([
    './rb-date-time-directive'
], function (rbDateTimeDirective) {
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
