define([
    'html!./rg-site-bottom.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rgSiteBottom
     * @module rg-site-bottom
     *
     * @restrict E
     *
     * @description
     * `<rg-site-bottom>` is a directive that should be used inside rg-site, and sticks to the bottom of the page
     *
     * @usage
     * <hljs lang="html">
     *    <rg-site-bottom>
     *        <any content>
     *     </rg-site-bottom>
     * </hljs>
     *
     * @ngInject
     */
    function rgSiteBottomDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rgSiteBottomDirective;
});
