define([
    'html!./rb-side-nav-item.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSideNav
     * @module rb-side-nav-item
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-side-nav-item>
     *     </rb-side-nav-item>
     * </hljs>
     *
     * @ngInject
     */
    function rbSideNavItemDirective () {

        return {
            scope: {
                active: '=',
                count: '=',
                invalid: '=',
                icon: '@',
                label: '@',
                uiSref: '@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbSideNavItemDirective;
});
