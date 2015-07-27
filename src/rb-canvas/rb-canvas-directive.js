define([
    'html!./rb-canvas.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCanvas
     * @module rb-canvas
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-canvas>
     *     </rb-canvas>
     * </hljs>
     *
     * @ngInject
     */
    function rbCanvasDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbCanvasDirective;
});
