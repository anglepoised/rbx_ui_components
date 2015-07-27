define([
    'html!./rb-divider.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDivider
     * @module rb-divider
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-divider>
     *     </rb-divider>
     * </hljs>
     *
     * @ngInject
     */
    function rbDividerDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbDividerDirective;
});
