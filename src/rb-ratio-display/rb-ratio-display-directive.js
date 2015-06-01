define([
    'html!./rb-ratio-display.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbRatio
     * @module rb-ratio-display
     *
     * @restrict E
     *
     * @description
     * The `<rb-ratio-display>`` component renders Rockabox's representations of a ratio.
     *
     * @usage
     * <hljs lang="html">
     *    <rb-ratio-display numerator="2500" denominator="3000" display-type="number"></rb-ratio-display>
     *    <rb-ratio-display numerator="2500" denominator="3000"></rb-ratio-display>
     *    <rb-ratio-display numerator="2500" denominator="3000" ratio-type="fractional"></rb-ratio-display>
     *    <rb-ratio-display numerator="2500" denominator="3000" ratio-type="fractional" display-type="currency">
     *        </rb-ratio-display>
     *    <rb-ratio-display numerator="2500" denominator="3000" ratio-type="fractional" display-type="currency"
     *    	decimal-places="0"></rb-ratio-display>
     * </hljs>
     *
     * @ngInject
     */
    function rbRatioDisplayDirective () {

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

    return rbRatioDisplayDirective;
});
