define([
], function () {

    /**
     * @ngdoc directive
     * @name rbTabset
     * @module rb-tabs
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-tabset>
     *        <rb-tab heading="hello">content</tb-tab>
     *     </rb-tabset>
     * </hljs>
     *
     * @ngInject
     */
    function rbTabDirective () {

        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: '<div ng-show="active" class="Tabs-panel" ng-transclude></div>',
            require: '^rbTabset',
            scope: {
                heading: '@',
                isActive: '=?',
                uiSref: '@'
            },
            link: function (scope, elem, attr, tabsetCtrl) {
                if (angular.isUndefined(scope.isActive)) {
                    scope.active = false;
                } else {
                    scope.active = scope.isActive;
                }
                tabsetCtrl.addTab(scope);
            }
        };
    }

    return rbTabDirective;

});
