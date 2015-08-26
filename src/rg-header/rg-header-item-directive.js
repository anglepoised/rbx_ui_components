define([
    'html!./rg-header-item.tpl.html'
], function (template) {

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
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rgHeaderItemDirective;
});
