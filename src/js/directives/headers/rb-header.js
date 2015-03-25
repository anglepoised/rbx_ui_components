(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.headers.rb-header
     * @description
     *
     * RB Header
     *
     */
    angular.module('directives.headers.rb-header', [

    ])
    .directive('rbHeader', RbHeaderDirective);

    /**
     * @ngdoc directive
     * @name rbHeader
     * @module directives.headers.rb-header
     *
     * @restrict E
     *
     * @description
     * `<rb-header>` is a directive that shows a header
     *
     * @usage
     * <hljs lang="html">
     *    <rb-header>
     *        <a class="Header-logo" ng-click="ctrl.logoHeaderFunction()" ng-aria>
     *            <rb-icon icon="white-alabaster-100-logo-rockabox">
     *                Rockabox
     *            </rb-icon>
     *        </a>
     *        <div class="Header-nav">
     *            <rb-nav-bar options="ctrl.options" clickfunction="ctrl.goTo(id)"
     *                isactivefunction="ctrl.isActive(id)"></rb-nav-bar>
     *        </div>
     *        <div class="Header-user">
     *            <rb-user username="ctrl.currentUsername" logoutfunction="ctrl.logout()">
     *                Sign out
     *            </rb-user>
     *        </div>
     *     </rb-header>
     * </hljs>
     *
     */

    function RbHeaderDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'headers/rb-header.tpl.html'
        };
    }
})();
