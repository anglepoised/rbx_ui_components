define([
    'html!./rb-main.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbMain
     * @module rb-main
     *
     * @restrict E
     *
     * @description
     * `<rb-main>` is a directive that wraps the main content on a page
     *
     * @usage
     * <hljs lang="html">
     *    <rb-main>
     *        <any main content>
     *     </rb-main>
     * </hljs>
     *
     * @ngInject
     */
    function rbMainDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbMainDirective;
});
