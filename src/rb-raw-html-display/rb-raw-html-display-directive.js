define([
    './rb-raw-html-display.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbRawHtmlDisplay
     * @module rb-raw-html-display
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-raw-html-display>
     *     </rb-raw-html-display>
     * </hljs>
     *
     * @ngInject
     */
    function rbRawHtmlDisplayDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbRawHtmlDisplayDirective;
});
