define([
    './rb-currency-display-link',
    './rb-currency-display.tpl.html'
], function (rbCurrencyDisplayLink, template) {

    /**
     * @ngdoc directive
     * @name rbCurrencyDisplay
     * @module rb-currency-display
     *
     * @restrict E
     *
     * @description
     * The link function for the `<rb-currency-display>` directive
     *
     * @scope
     *  'amount': contains the full amount in which to display as currency
     *
     * @usage
     * <hljs lang="html">
     *    <rb-currency-displa amount="9999.99"></rb-currency-display>
     * </hljs>
     *
     * @ngInject
     */
    function rbCurrencyDisplayDirective () {

        return {
            scope: {
                amount: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: rbCurrencyDisplayLink
        };
    }

    return rbCurrencyDisplayDirective;
});
