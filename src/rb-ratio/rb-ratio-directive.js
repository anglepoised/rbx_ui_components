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
     *    <rb-ratio numerator="2500" denominator="3000" display-type="number"></rb-ratio>
     *    <rb-ratio numerator="2500" denominator="3000"></rb-ratio>
     *    <rb-ratio numerator="2500" denominator="3000" ratio-type="fractional"></rb-ratio>
     *    <rb-ratio numerator="2500" denominator="3000" ratio-type="fractional" display-type="currency"></rb-ratio>
     *    <rb-ratio numerator="2500" denominator="3000" ratio-type="fractional" display-type="currency"
     *    	decimal-places="0"></rb-ratio>
     * </hljs>
     *
     * @ngInject
     */
    function rbRatioDirective () {

        return {
            scope: {
                denominator: '@',
                decimalPlaces: '@',
                displayType: '@',
                numerator: '@',
                ratioType: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbRatioDirective;
});
