define([
    './rb-datetime-directive',
    './rb-datetime.css'
], function (rbDatetimeDirective, css) {
    /**
     * @ngdoc module
     * @name rb-datetime
     * @description
     *
     * rbDateTime
     *
     */
    var rbDateTime = angular
        .module('rb-datetime', [])
        .directive('rbDatetime', rbDatetimeDirective);

    return rbDateTime;

});
