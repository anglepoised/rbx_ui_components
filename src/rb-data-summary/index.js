define([
    './rb-data-summary-directive',
    './rb-data-summary-item-directive',
    './rb-data-summary.css'
], function (rbDataSummaryDirective, rbDataSummaryItemDirective, css) {
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
        .directive('rbDataSummary', rbDataSummaryDirective)
        .directive('rbDataSummaryItem', rbDataSummaryItemDirective);

    return rbDataSummary;

});
