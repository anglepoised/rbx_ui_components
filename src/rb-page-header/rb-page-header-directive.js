define([
    'html!./rb-page-header.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPageHeader
     * @module rb-page-header
     *
     * @restrict E
     *
     * @description
     * `<rb-page-header>` is a directive that shows a page header
     *
     * @usage
     * <hljs lang="html">
     *    <rb-page-header>
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
     *     </rb-page-header>
     * </hljs>
     *
     * @ngInject
     */
    function rbPageHeaderDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbPageHeaderDirective;
});
