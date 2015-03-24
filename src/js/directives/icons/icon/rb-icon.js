(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.icons.icon.rb-icon
     * @description
     *
     * RB Icon
     *
     */
    angular.module('directives.icons.icon.rb-icon', [

    ])
    .directive('rbIcon', RbIconDirective);

    /**
     * @ngdoc directive
     * @name rbIcon
     * @module directives.icons.icon.rb-icon
     *
     * @restrict E
     *
     * @description
     * `<rb-icon>` is a directive that renders an icon
     *
     * @scope
     *  'icon': contains an icon class for the icon
     *
     * @usage
     * <hljs lang="html">
     *    <a class="Header-logo" ng-click="clickfunction()" ng-aria>
     *        <rb-icon icon="white-alabaster-100-logo-rockabox">Rockabox</rb-icon>
     *    </a>
     * </hljs>
     *
     */

    function RbIconDirective () {

        return {
            scope: {
                'icon': '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'icons/icon/rb-icon.tpl.html'
        };
    }
})();
