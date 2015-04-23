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
     *
     * @usage
     * <hljs lang="html">
     *    <rb-data-summary>
     *     </rb-data-summary>
     * </hljs>
     *
     * @ngInject
     */
    function rbDataSummaryDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbDataSummaryDirective;
});
