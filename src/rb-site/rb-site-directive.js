define([
    './rb-site.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSite
     * @module rb-site
     *
     * @restrict E
     *
     * @deprecated
     * Please use rg-site, which encompases functionality from this component.
     *
     * @description
     * `<rb-site>` is a directive that wraps all content on a page
     *
     * @usage
     * <hljs lang="html">
     *    <rb-site>
     *        <any content>
     *     </rb-site>
     * </hljs>
     *
     * @ngInject
     */
    function rbSiteDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbSiteDirective;
});
