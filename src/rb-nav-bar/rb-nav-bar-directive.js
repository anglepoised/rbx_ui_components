define([
    'html!./rb-nav-bar.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbNavBar
     * @module rb-nav-bar
     *
     * @restrict E
     *
     * @deprecated
     * Please use rg-header, which encompases functionality from this component.
     *
     * @description
     *
     * `<rb-nav-bar>` is a directive that shows a navigation bar
     *
     * @scope
     *  'options': an array containing option objects to be placed in the navigation bar.
     *           Option objects should be defined as follows:
     *           {id: '<an identifier for the option>',
     *           text: 'Text to be displayed'}
     *
     * @usage
     * <hljs lang="html">
     *    <div class="Header-nav">
     *        <rb-nav-bar options="ctrl.options"></rb-nav-bar>
     *    </div>
     * </hljs>
     *
     * @ngInject
     */
    function rbNavBarDirective () {

        return /*@ngInject*/ {
            scope: {
                'options': '='
            },
            restrict: 'E',
            replace: true,
            template: template,
            controller: function ($scope, $state) {
                /**
                 * Currently a workaround for an issue where ui-sref-active
                 * does not work with abstract and child states.
                 * Ref: https://github.com/angular-ui/ui-router/issues/1431
                 */
                $scope.isActive = function (root) {
                    return $state.includes(root);
                };
            }
        };
    }

    return rbNavBarDirective;
});
