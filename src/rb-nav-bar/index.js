define([
    './rb-nav-bar-directive'
], function (rbNavBarDirective) {
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
