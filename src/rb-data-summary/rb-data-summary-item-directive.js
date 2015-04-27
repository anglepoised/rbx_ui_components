define([
    'html!./rb-data-summary-item.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDataSummaryItem
     * @module rb-data-summary-item
     *
     * @restrict E
     *
     * @description
     * `<rb-data-summary-item>` is a directive that wraps a data item for a summary
     *
     * @scope
     *  'header': contains a header description for the item
     *
     * @usage
     * <hljs lang="html">
     *    <rb-data-summary>
     *        <rb-data-summary-item header="Here goes a text for the header">
     *        </rb-data-summary-item>
     *    </rb-data-summary>
     * </hljs>
     *
     * @ngInject
     */
    function rbDataSummaryItemDirective () {

        return {
            scope: {
                'header': '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbDataSummaryItemDirective;
});
