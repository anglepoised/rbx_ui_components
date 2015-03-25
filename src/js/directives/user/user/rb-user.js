(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.user.user.rb-user
     * @description
     *
     * RB User
     *
     */
    angular.module('directives.user.user.rb-user', [

    ])
    .directive('rbUser', RbUserDirective);

    /**
     * @ngdoc directive
     * @name rbUser
     * @module directives.user.user.rb-user
     *
     * @restrict E
     *
     * @description
     * `<rb-user>` is a directive that shows a username and logout component
     *
     * @scope
     *  'username': contains an expression that returns the current logged in username
     *  'logoutfunction': a custom logout function to be executed when clicked
     *
     * @usage
     * <hljs lang="html">
     *   <div class="Header-user">
     *      <rb-user username="ctrl.currentUsername" logoutfunction="ctrl.logout()">
     *          Sign out
     *      </rb-user>
     *   </div>
     * </hljs>
     *
     */

    function RbUserDirective () {

        return {
            scope: {
                'username': '=',
                'logoutfunction': '&'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'user/user/rb-user.tpl.html'
        };
    }
})();
