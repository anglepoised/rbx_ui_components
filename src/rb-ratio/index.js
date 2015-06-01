define([
    './rb-ratio-directive',
    'components/rb-currency-display',
    './rb-ratio.css'
], function (rbRatioDirective, rbCurrencyDisplay, css) {
    /**
     * @ngdoc module
     * @name rb-ratio
     * @description
     *
     * rbRatio
     *
     */
    var rbRatio = angular
        .module('rb-ratio', [
            rbCurrencyDisplay.name
        ])
        .directive('rbRatio', rbRatioDirective);

    return rbRatio;

});
