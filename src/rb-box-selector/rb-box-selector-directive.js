define([
    'html!./rb-box-selector.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbBoxSelector
     * @module rb-box-selector
     *
     * @restrict E
     *
     * @description
     * <rb-box-selector> is a compnent for creating some boxes to click and make a selection
     * it functions similar to a radio group
     *
     * @usage
     * <hljs lang="html">
     *    <rb-box-selector label="a label" required="true" ng-model='mymMdel' selections='mySelections'>
     *    </rb-box-selector>
     * </hljs>
     *
     * @ngInject
     */
    function rbBoxSelectorDirective () {

        return {
            scope: {
                selections: '=',
                ngModel: '=',
                label: '@?',
                required: '@?'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function (scope) {
                // if required is set true but no model value is given default to the first option
                if (scope.required && !scope.ngModel) {
                    scope.ngModel = scope.selections[0];
                }
                scope.select = function (selection) {
                    scope.ngModel = selection;
                };
            }
        };
    }

    return rbBoxSelectorDirective;
});
