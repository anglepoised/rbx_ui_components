define([
    'html!./rb-page-title.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPageTitle
     * @module rb-page-title
     *
     * @restrict E
     *
     * @description
     * `<rb-page-title>` is a directive that shows a page title
     *
     * @usage
     * <hljs lang="html">
     *    <rb-page-title
     *    		heading="My Test Page"
     *    		subheading="This subheading rocks"
     *    		badge-status="statusFinished"
     *    		back-text="Back to home page"
     *    		back-sref="home">
     *    </rb-page-title>
     * </hljs>
     *
     * @ngInject
     */
    function rbPageTitleDirective () {

        return {
            scope: {
                heading: '@',
                subheading: '@',
                badgeStatus: '@',
                backText: '@',
                backSref: '@',
                compact: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbPageTitleDirective;
});
