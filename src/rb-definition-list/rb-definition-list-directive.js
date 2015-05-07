define([
    'html!./rb-definition-list.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDefinitionList
     * @module rb-definition-list
     *
     * @restrict E
     *
     * @description
     * `<rb-definition-list>` is a directive that wraps a `definition list`
     *
     * @usage
     * <hljs lang="html">
     *    <rb-definition-list>
     *     </rb-definition-list>
     * </hljs>
     *
     * @ngInject
     */
    function rbDefinitionListDirective () {

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbDefinitionListDirective;
});
