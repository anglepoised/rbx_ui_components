define([
    './rb-user-directive',
    './rb-user.css'
], function (rbUserDirective, css) {
    /**
     * @ngdoc module
     * @name directives.nav-bars.rb-nav-bar
     * @description
     *
     * RB Navigation Bar
     *
     */
    var rbNavBar = angular
        .module('rb-user', [])
        .directive('rbUser', rbUserDirective);

    return rbNavBar;

});
