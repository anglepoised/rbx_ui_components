define([
    'html!./rg-site.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rgSite
     * @module rg-site
     *
     * @restrict E
     *
     * @description
     * `<rg-site>` is a directive that wraps all content on a page
     *
     * @usage
     * <hljs lang="html">
     *    <rg-site>
     *        <any content>
     *     </rg-site>
     * </hljs>
     *
     * @ngInject
     */
    function rgSiteDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: function (scope, ele, attrs) {
                scope.noScroll = false;

                if (angular.isDefined(attrs.noScroll)) {
                    scope.noScroll = attrs.noScroll;
                }
            }
        };
    }

    return rgSiteDirective;
});
