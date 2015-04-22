define([
    './rb-currency-directive',
    './rb-currency.css'
], function (rbCurrencyDirective, css) {
    /**
     * @ngdoc module
     * @name rb-currency
     * @description
     *
     * rbCurrency
     *
     */
    var rbCurrency = angular
        .module('rb-currency', [])
        .directive('rbCurrency', rbCurrencyDirective);

    return rbCurrency;

});
