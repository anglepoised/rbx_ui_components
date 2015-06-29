define([
    'html!./rb-action-bar.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbActionBar
     * @module rb-action-bar
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-action-bar>
     *     </rb-action-bar>
     * </hljs>
     *
     * @ngInject
     */
    function rbActionBarDirective () {

        return {
            scope: {
                'column': '@',
                'cancelAction': '&',
                'cancelLabel': '@',
                'message': '@',
                'primaryAction': '&',
                'primaryLabel': '@',
                'row': '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function (scope) {
                if (angular.isUndefined(scope.cancelLabel)) {
                    scope.cancelLabel = 'Cancel';
                }

                if (angular.isUndefined(scope.column)) {
                    scope.column = 'true';
                }

                if (angular.isUndefined(scope.primaryLabel)) {
                    scope.primaryLabel = 'Submit';
                }
            }
        };
    }

    return rbActionBarDirective;
});
