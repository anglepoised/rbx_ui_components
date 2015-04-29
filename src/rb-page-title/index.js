define([
    './rb-page-title-directive',
    'components/rb-badge',
    'components/rb-button',
    './rb-page-title.css'
], function (rbPageTitleDirective, rbBadge, rbButton, css) {
    /**
     * @ngdoc module
     * @name rb-page-title
     * @description
     *
     * RB Page Title
     *
     */
    var rbHeader = angular
        .module('rb-page-title', [
            rbBadge.name,
            rbButton.name
        ])
        .directive('rbPageTitle', rbPageTitleDirective);

    return rbHeader;
});
