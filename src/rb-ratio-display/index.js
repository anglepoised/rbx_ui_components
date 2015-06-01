define([
    './rb-ratio-display-directive',
    'components/rb-currency-display',
    './rb-ratio-display.css'
], function (rbRatioDisplayDirective, rbCurrencyDisplay, css) {
    /**
     * @ngdoc module
     * @name rb-ratio-display
     * @description
     *
     * rbRatio
     *
     */
    var rbRatioDisplay = angular
        .module('rb-ratio-display', [
            rbCurrencyDisplay.name
        ])
        .directive('rbRatioDisplay', rbRatioDisplayDirective);

    return rbRatioDisplay;

});
