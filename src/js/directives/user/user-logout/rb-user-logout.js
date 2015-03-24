(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.user.user-logout.rb-user-logout
     * @description
     *
     * RB User Logout
     *
     */
    angular.module('directives.user.user-logout.rb-user-logout', [

    ])
    .directive('rbUserLogout', RbUserLogoutDirective);

    /**
     * @ngdoc directive
     * @name rbUserLogout
     * @module directives.user.user-logout.rb-user-logout
     *
     * @restrict E
     *
     * @description
     * `<rb-user-logout>` is a directive that shows a username and logout component
     *
     * @scope
     *  'username': contains an expression that returns the current logged in username
     *  'logoutfunction': a custom logout function to be executed when clicked
     *
     * @usage
     * <hljs lang="html">
     *   <div class="Header-user">
     *      <rb-user-logout username="ctrl.currentUsername" logoutfunction="ctrl.logout()">
     *          Sign out
     *      </rb-user-logout>
     *   </div>
     * </hljs>
     *
     */

    function RbUserLogoutDirective () {

        return {
            scope: {
                'username': '=',
                'logoutfunction': '&'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'user/user-logout/rb-user-logout.tpl.html'
        };
    }
})();
