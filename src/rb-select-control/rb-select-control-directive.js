define([
    'html!./rb-select-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSelectControl
     * @module rb-select-control
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-select-control>
     *     </rb-select-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbSelectControlDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbSelectControlDirective;
});
