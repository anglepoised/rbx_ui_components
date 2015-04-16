define([
    './rb-badge-directive',
    './rb-badge.css'
], function (rbBadgeDirective, css) {
    /**
     * @ngdoc module
     * @name rb-badge
     * @description
     *
     * rbBadge
     *
     */
    var rbBadge = angular
        .module('rb-badge', [])
        .directive('rbBadge', rbBadgeDirective);

    return rbBadge;

});
