define([
    './rb-currency-link',
    'html!./rb-currency.tpl.html'
], function (rbCurrencyLink, template) {

    /**
     * @ngdoc directive
     * @name rbCurrency
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
            template: template,
            link: rbCurrencyLink
        };
    }

    return rbCurrencyDirective;
});
