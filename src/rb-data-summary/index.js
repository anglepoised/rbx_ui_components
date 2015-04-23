define([
    './rb-data-summary-directive',
    './rb-data-summary.css'
], function (rbDataSummaryDirective, css) {
    /**
     * @ngdoc module
     * @name rb-data-summary
     * @description
     *
     * rbDataSummary
     *
     */
    var rbDataSummary = angular
        .module('rb-data-summary', [])
        .directive('rbDataSummary', rbDataSummaryDirective);

    return rbDataSummary;

});
