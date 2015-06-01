define([
    './rb-datetime-display-directive',
    './rb-datetime-display.css'
], function (rbDatetimeDisplayDirective, css) {
    /**
     * @ngdoc module
     * @name rb-datetime-display
     * @description
     *
     * rbDateTimeDisplay
     *
     */
    var rbDateTimeDisplay = angular
        .module('rb-datetime-display', [])
        .directive('rbDatetimeDisplay', rbDatetimeDisplayDirective);

    return rbDateTimeDisplay;

});
