define([
    './rb-user-directive'
], function (rbUserDirective) {
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
