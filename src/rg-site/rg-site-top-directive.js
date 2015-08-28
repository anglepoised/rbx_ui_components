define([
    'html!./rg-site-top.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rgSiteTop
     * @module rg-site-top
     *
     * @restrict E
     *
     * @description
     * `<rg-site-top>` is a directive that should be used inside rg-site, and sticks to the top of the page
     *
     * @usage
     * <hljs lang="html">
     *    <rg-site-top>
     *        <any content>
     *     </rg-site-top>
     * </hljs>
     *
     * @ngInject
     */
    function rgSiteTopDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rgSiteTopDirective;
});
