define([
    'components/rb-button',
    'components/rb-icon',
    './rb-side-nav-directive',
    './rb-side-nav-item-directive',
    './rb-side-nav.css'
], function (rbButton, rbIcon, rbSideNavDirective, rbSideNavItemDirective, css) {
    /**
     * @ngdoc module
     * @name rb-side-nav
     * @description
     *
     * rbSideNav
     *
     */
    var rbSideNav = angular
        .module('rb-side-nav', [rbButton.name, rbIcon.name])
        .directive('rbSideNav', rbSideNavDirective)
        .directive('rbSideNavItem', rbSideNavItemDirective);

    return rbSideNav;

});
