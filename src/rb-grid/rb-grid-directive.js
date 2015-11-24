define([
    './rb-grid.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbGrid
     * @module rb-grid
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-grid>
     *     </rb-grid>
     * </hljs>
     *
     * @ngInject
     */
    function rbGridDirective () {

        return {
            scope: {
                gutter: '@',
                flexCells: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: function (scope, ele, attrs) {
                if (angular.isUndefined(scope.gutter)) {
                    scope.gutter = 'true';
                }

                if (angular.isUndefined(scope.flexCells)) {
                    scope.flexCells = 'true';
                }
            }
        };
    }

    return rbGridDirective;
});
