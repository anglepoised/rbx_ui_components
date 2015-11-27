define([
    './rb-loading.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbLoading
     * @module rb-loading
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-loading item-label="People" ></rb-loading>
     * </hljs>
     *
     * @ngInject
     */
    function rbLoadingDirective () {

        return {
            scope: {
                itemLabel: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function (scope, elem, attr) {
                scope.size = false;
                scope.hideText = false;

                if (angular.isDefined(attr.size)) {
                    scope.size = attr.size;
                }

                if (angular.isDefined(attr['hideText'])) {
                    scope.hideText = attr.hideText;
                }
            }
        };
    }

    return rbLoadingDirective;
});
