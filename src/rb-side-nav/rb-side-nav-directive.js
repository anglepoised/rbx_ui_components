define([
    'html!./rb-side-nav.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSideNav
     * @module rb-side-nav
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-side-nav>
     *     </rb-side-nav>
     * </hljs>
     *
     * @ngInject
     */
    function rbSideNavDirective () {

        return {
            scope: {
                title: '@',
                saveLabel: '@',
                actionHelpText: '@',
                onSave: '&',
                onCancel: '&'
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbSideNavDirective;
});
