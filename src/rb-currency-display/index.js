define([
    './rb-currency-display-directive',
    './rb-currency-display.css'
], function (rbCurrencyDisplayDirective, css) {
    /**
     * @ngdoc module
     * @name rb-currency-display
     * @description
     *
     * rbCurrencyDisplay
     *
     */
    var rbCurrencyDisplay = angular
        .module('rb-currency-display', [])
        .directive('rbCurrencyDisplay', rbCurrencyDisplayDirective);

    return rbCurrencyDisplay;

});
