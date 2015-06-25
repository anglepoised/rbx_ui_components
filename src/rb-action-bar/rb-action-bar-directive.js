define([
    'html!./rb-action-bar.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbActionBar
     * @module rb-action-bar
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-action-bar>
     *     </rb-action-bar>
     * </hljs>
     *
     * @ngInject
     */
    function rbActionBarDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbActionBarDirective;
});
