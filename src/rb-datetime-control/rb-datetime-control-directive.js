define([
    'html!./rb-datetime-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDatetimeControl
     * @module rb-datetime-control
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-datetime-control>
     *     </rb-datetime-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbDatetimeControlDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbDatetimeControlDirective;
});
