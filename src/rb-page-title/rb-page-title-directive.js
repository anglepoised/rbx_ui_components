define([
    'html!./rb-page-title.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbHeader
     * @module rb-header
     *
     * @restrict E
     *
     * @description
     * `<rb-header>` is a directive that shows a header
     *
     * @usage
     * <hljs lang="html">
     *    <rb-page-title
     *    		heading="My Test Page"
     *    		subheading="This subheading rocks"
     *    		badge-status="statusFinished"
     *    		back-text="Back to home page"
     *    		back-sref="home"
     *    		button-click="" button-label="Text Action" button-show="true" button-state="positive">
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
                button: '@',
                badgeStatus: '@',
                backText: '@',
                backSref: '@',
                buttonClick: '&',
                buttonLabel: '@',
                buttonShow: '=',
                buttonState: '@',
                status: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbPageTitleDirective;
});
