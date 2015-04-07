define([
    'html!./rb-page-title.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbHeader
     * @module rb-header
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
     * @ngInject
     */
    function rbPageTitleDirective () {

        return {
            scope: {
                heading: '@',
                subheading: '@',
                button: '@',
                back: '@',
                status: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbPageTitleDirective;
});
