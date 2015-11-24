define([
    './rb-deep-search-tree',
    './rb-deep-search.tpl.html'
], function (Tree, template) {

    /**
     * @ngdoc directive
     * @name rbDeepSearch
     * @module rb-deep-search
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-deep-search>
     *     </rb-deep-search>
     * </hljs>
     *
     * @ngInject
     */
    function rbDeepSearchDirective () {

        return /*@ngInject*/ {
            scope: {
                form: '=',
                label: '@',
                name: '@',
                ngModel: '=',
                placeholder: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            controller: function ($scope) {

                $scope.tree = new Tree($scope.ngModel);

                $scope.search = function (val) {
                    $scope.tree.search(val);
                };

                $scope.$watch('query', $scope.search, true);

            }
        };
    }

    return rbDeepSearchDirective;
});
