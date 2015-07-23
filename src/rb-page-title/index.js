define([
    '../rb-badge',
    '../rb-button',
    './rb-page-title-directive',
    './rb-page-title.css'
], function (rbBadge, rbButton, rbPageTitleDirective, css) {
    /**
     * @ngdoc module
     * @name rb-page-title
     * @description
     *
     * RB Page Title
     *
     */
    var rbPageTitle = angular
        .module('rb-page-title', [
            rbBadge.name,
            rbButton.name
        ])
        .directive('rbPageTitle', rbPageTitleDirective);

    return rbPageTitle;
});
