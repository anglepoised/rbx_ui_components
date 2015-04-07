define([
    'html!./rb-icon.tpl.html'
], function (template) {
    /**
     * @ngdoc directive
     * @name rbIcon
     * @module rb-icon
     *
     * @restrict E
     *
     * @description
     * `<rb-icon>` is a directive that renders an icon
     *
     * @scope
     *  'icon': contains an icon class for the icon
     *
     * @usage
     * <hljs lang="html">
     *    <a class="Header-logo" ng-click="clickfunction()" ng-aria>
     *        <rb-icon icon="white-alabaster-100-logo-rockabox">Rockabox</rb-icon>
     *    </a>
     * </hljs>
     *
     * @ngInject
     */
    function rbIconDirective () {

        return {
            scope: {
                'icon': '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbIconDirective;
});
