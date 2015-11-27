define([
    './rb-side-nav-item.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSideNav
     * @module rb-side-nav-item
     *
     * @restrict E
     *
     * @description
     * `<rb-side-nav-item>` Is a directive to create an item within a `<rb-side-nav>`.
     *
     * Attributes:
     * - active is an expression that will set the active state of the item.
     * - count is an expression that will set the count displayed next to the label.
     * - invalid is an expression which toggles an warning icon next to the label, this hides the count with true.
     * - icon is a the class of a icon next to the label
     * - label is the text to render within the item
     * - ui-sref is the ui-router state reference to goto when the item is clicked.
     *
     * @usage
     * <hljs lang="html">
     *    <rb-side-nav-item
     *        active="activeScopeVar"
     *        count="countScopeVar"
     *        invalid="invalidScopeVar"
     *        icon="icon-class"
     *        label="Item"
     *        ui-sref="a-state">
     *     </rb-side-nav-item>
     * </hljs>
     *
     * @ngInject
     */
    function rbSideNavItemDirective ($state) {

        return {
            scope: {
                active: '=',
                isActive: '@',
                count: '=',
                invalid: '=',
                icon: '@',
                label: '@',
                uiSref: '@',
                valid: '='
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function (scope) {
                if ($state.current && scope.uiSref === $state.current.name) {
                    // weird bug **created isActive to not conflict with existing active functionality
                    scope.isActive = true;
                }
            }
        };
    }

    return rbSideNavItemDirective;
});
