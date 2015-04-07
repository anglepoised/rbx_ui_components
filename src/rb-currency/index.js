define([
    './rb-currency-directive'
], function (rbCurrencyDirective) {
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
