(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.headers.logout.rb-header-logout
     * @description
     *
     * RB Header Logout
     *
     */
    angular.module('directives.headers.logout.rb-header-logout', [

    ])
    .directive('rbHeaderLogout', RbHeaderLogoutDirective);

    /**
     * @ngdoc directive
     * @name rbHeaderLogout
     * @module directives.headers.logout.rb-header-logout
     *
     * @restrict E
     *
     * @description
     * `<rb-header-logout>` is a directive that shows a username and logout component
     * in a header
     *
     * @scope
     *  'username': contains an expression that returns the current logged in username
     *  'logoutfunction': a custom logout function to be executed when clicked
     *
     * @usage
     * <hljs lang="html">
     *   <rb-header-logout username="ctrl.currentUsername"
     *   logoutfunction="ctrl.logout()">Sign out</rb-header-logout>
     * </hljs>
     *
     */

    function RbHeaderLogoutDirective () {

        return {
            scope: {
                'username': '=',
                'logoutfunction': '&'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'headers/logout/rb-header-logout.tpl.html'
        };
    }
})();
