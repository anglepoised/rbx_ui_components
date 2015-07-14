define([
    'html!./rb-component-display.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbComponentDisplay
     * @module rb-component-display
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-component-display>
     *     </rb-component-display>
     * </hljs>
     *
     * @ngInject
     */
    function rbComponentDisplayDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbComponentDisplayDirective;
});
