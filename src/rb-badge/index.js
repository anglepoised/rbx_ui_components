define([
    './rb-badge-directive'
], function (rbBadgeDirective) {
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
