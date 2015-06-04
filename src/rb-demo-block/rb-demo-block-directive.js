define([
    'html!./rb-demo-block.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDemoBlock
     * @module rb-demo-block
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-demo-block>
     *     </rb-demo-block>
     * </hljs>
     *
     * @ngInject
     */
    function rbDemoBlockDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbDemoBlockDirective;
});
