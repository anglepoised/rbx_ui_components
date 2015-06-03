define([
    'html!./rb-definition-list-item.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDefinitionListItem
     * @module rb-definition-list-item
     *
     * @restrict E
     *
     * @description
     * `<rb-definition-list-item>` is a directive that wraps a `dt` and `dd` item for a `dl`
     *
     * @scope
     *  'icon': contains an optional icon for the `dt`
     *  'label': contains a label for the `dt`
     *
     * @usage
     * <hljs lang="html">
     *    <rb-definition-list>
     *        <rb-definition-list-item icon="my-icon" label="my-label">
     *        </rb-definition-list-item>
     *    </rb-definition-list>
     * </hljs>
     *
     * @ngInject
     */
    function rbDefinitionListItemDirective () {

        return {
            scope: {
                'icon': '@',
                'label': '@'
            },
            replace: true,
            restrict: 'E',
            transclude: true,
            template: template
        };
    }

    return rbDefinitionListItemDirective;
});
