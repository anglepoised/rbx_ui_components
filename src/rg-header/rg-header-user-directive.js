define([
    './rg-header-user.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rgHeaderuser
     * @module rg-header-user
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rg-header-user>
     *     </rg-header-user>
     * </hljs>
     *
     * @ngInject
     */
    function rgHeaderUserDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rgHeaderUserDirective;
});
