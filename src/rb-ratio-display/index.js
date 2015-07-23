define([
    '../rb-currency-display',
    './rb-ratio-display-directive',
    './rb-ratio-display.css'
], function (rbCurrencyDisplay, rbRatioDisplayDirective, css) {
    /**
     * @ngdoc module
     * @name rb-ratio-display
     * @description
     *
     * rbRatioDisplay
     *
     */
    var rbRatioDisplay = angular
        .module('rb-ratio-display', [
            rbCurrencyDisplay.name
        ])
        .directive('rbRatioDisplay', rbRatioDisplayDirective);

    return rbRatioDisplay;

});
