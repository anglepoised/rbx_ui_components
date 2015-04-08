define([
    'html!./rb-ratio.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbRatio
     * @module rb-ratio
     *
     * @restrict E
     *
     * @description
     * The `<rb-ratio>`` component renders Rockabox's representations of a ratio.
     *
     * @usage
     * <hljs lang="html">
     *    <rb-ratio numerator="2500" denominator="3000"></rb-ratio>
     * </hljs>
     *
     * @ngInject
     */
    function rbRatioDirective () {

        return {
            scope: {
                numerator: '@',
                denominator: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbRatioDirective;
});
