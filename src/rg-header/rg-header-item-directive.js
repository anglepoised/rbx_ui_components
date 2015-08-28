define([
    'html!./rg-header-item.tpl.html',
    'ui-components/utils/transclude-attrs'
], function (template, transcludeAttrs) {

    /**
     * @ngdoc directive
     * @name rgHeaderItem
     * @module rg-header-item
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rg-header-item>
     *     </rg-header-item>
     * </hljs>
     *
     * @ngInject
     */
    function rgHeaderItemDirective () {

        return {
            scope: {
                isActive: '@'
            },
            link: function (scope, elem, attrs) {
                transcludeAttrs(elem, attrs, ['ui-sref', 'href']);
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rgHeaderItemDirective;
});
