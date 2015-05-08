define([
    'html!./rb-check-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCheckControl
     * @module rb-check-control
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-check-control>
     *     </rb-check-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckControlDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbCheckControlDirective;
});
