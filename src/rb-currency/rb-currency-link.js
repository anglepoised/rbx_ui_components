define([
], function () {

    /**
     * @ngdoc link
     * @name rbCurrencyLink
     * @module rb-currency
     *
     * @restrict E
     *
     * @description
     * The link function for the `<rb-currency>` directive
     *
     * @scope
     *  'fullAmount': contains the full amount in which to display as currency
     *
     * @ngInject
     */
    function rbCurrencyLink (scope, element, attributes) {
        var value,
            decimalPlaces = attributes.decimalPlaces || 2;

        // Rounds the amount to the correct amount of decimal places and splits the number.
        value = parseFloat(scope.amount).toFixed(decimalPlaces).toString().split('.');

        scope.integerPart = value[0];
        scope.fractionalPart = value[1] || 0;
    }

    return rbCurrencyLink;

});
