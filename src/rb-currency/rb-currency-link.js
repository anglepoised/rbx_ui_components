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
        var value = scope.fullAmount.toString().split('.');

        scope.amount = value[0];
        scope.decimal = value[1] || 0;
    }

    return rbCurrencyLink;

});
