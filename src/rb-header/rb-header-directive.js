define([
    'html!./rb-header.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbHeader
     * @module rb-header
     *
     * @restrict E
     *
     * @description
     * `<rb-header>` is a directive that shows a header
     *
     * @usage
     * <hljs lang="html">
     *    <rb-header>
     *        <any content>
     *     </rb-header>
     * </hljs>
     *
     * @ngInject
     */
    function rbHeaderDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbHeaderDirective;
});
