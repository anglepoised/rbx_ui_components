define([
    'html!./rb-check-with-text-control-group.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCheckWithTextControlGroup
     * @module rb-check-with-text-control-group
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-check-with-text-control-group>
     *     </rb-check-with-text-control-group>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckWithTextControlGroupDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbCheckWithTextControlGroupDirective;
});
