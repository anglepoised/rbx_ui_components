define([
    'html!./rb-currency.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCurrency
     * @module rb-currency
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-currency amount="9999.99"></rb-currency>
     * </hljs>
     *
     * @ngInject
     */
    function rbCurrencyDirective () {

        return {
            scope: {
                fullAmount: '@amount'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: function (scope, element, attributes) {
                var value = scope.fullAmount.toString().split('.');

                scope.amount = value[0];
                scope.decimal = value[1] || 0;
            }
        };
    }

    return rbCurrencyDirective;
});
