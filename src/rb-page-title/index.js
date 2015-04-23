define([
    './rb-page-title-directive',
    'components/rb-badge',
    './rb-page-title.css'
], function (rbPageTitleDirective, rbBadge, css) {
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
            rbBadge.name
        ])
        .directive('rbPageTitle', rbPageTitleDirective);

    return rbHeader;
});
