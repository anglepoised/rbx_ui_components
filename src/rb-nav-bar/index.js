define([
    './rb-nav-bar-directive',
    './rb-nav-bar.css'
], function (rbNavBarDirective, css) {
    /**
     * @ngdoc module
     * @name rb-nav-bar
     * @description
     *
     * RB Navigation Bar
     *
     */
    var rbNavBar = angular
        .module('rb-nav-bar', [])
        .directive('rbNavBar', rbNavBarDirective);

    return rbNavBar;

});
