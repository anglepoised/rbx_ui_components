define([
    'html!./rb-data-summary.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDataSummary
     * @module rb-data-summary
     *
     * @restrict E
     *
     * @description
     * `<rb-data-summary>` is a directive that wraps data items for summaries
     *
     * You can supply an optional `type` attribute with value `financials`,
     * `timings` or `notes` to show a related icon in the left column.
     *
     * @usage
     * <hljs lang="html">
     *    <rb-data-summary type="financials | timings | notes">
     *    </rb-data-summary>
     * </hljs>
     *
     * @ngInject
     */
    function rbDataSummaryDirective () {

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: link
        };

        function link (scope, elem, attr) {

            if (angular.isDefined(attr.type)) {
                elem.addClass('DataSummary--' + attr.type);
            }
        }
    }

    return rbDataSummaryDirective;
});
