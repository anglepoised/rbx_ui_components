define([
    './rb-user.tpl.html'
], function (template) {
    /**
     * @ngdoc directive
     * @name rbUser
     * @module directives.users.rb-user
     *
     * @restrict E
     *
     * @deprecated
     * Please use rg-header, which encompases functionality from this component.
     *
     * @description
     *
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
     * @ngInject
     */
    function rbUserDirective () {

        return {
            scope: {
                'username': '=',
                'logoutfunction': '&'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbUserDirective;
});
