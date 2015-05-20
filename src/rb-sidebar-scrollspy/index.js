define([
    'angular-strap/dist/modules/debounce.js',
    'angular-strap/dist/modules/dimensions.js',
    'angular-strap/dist/modules/scrollspy.js',
    './rb-sidebar-scrollspy-directive',
    './rb-sidebar-scrollspy.css'
], function (bsDebounce, bsDimensions, bsScrollSpy, rbSidebarScrollspyDirective, css) {
    /**
     * @ngdoc module
     * @name rb-sidebar-scrollspy
     * @description
     *
     * rbSidebarScrollspy
     *
     */
    var rbSidebarScrollspy = angular
        .module('rb-sidebar-scrollspy', ['mgcrea.ngStrap.scrollspy'])
        .directive('rbSidebarScrollspy', rbSidebarScrollspyDirective);

    return rbSidebarScrollspy;

});
