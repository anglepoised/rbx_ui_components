define([
    'html!./rg-site-middle.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rgSiteMiddle
     * @module rg-site-middle
     *
     * @restrict E
     *
     * @description
     * `<rg-site-middle>` is a directive that should be used inside rg-site, and fills the flex and is scrollable.
     *
     * @usage
     * <hljs lang="html">
     *    <rg-site-middle>
     *        <any content>
     *     </rg-site-middle>
     * </hljs>
     *
     * @ngInject
     */
    function rgSiteMiddleDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rgSiteMiddleDirective;
});
