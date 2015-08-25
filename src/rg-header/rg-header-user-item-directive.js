define([
    'html!./rg-header-user-item.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rgHeaderuser
     * @module rg-header-user-item
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rg-header-user-item>
     *     </rg-header-user-item>
     * </hljs>
     *
     * @ngInject
     */
    function rgHeaderUserItemDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rgHeaderUserItemDirective;
});
