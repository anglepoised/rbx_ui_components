define([
    'html!./rb-radio-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbRadioControl
     * @module rb-radio-control
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-radio-control>
     *     </rb-radio-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbRadioControlDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbRadioControlDirective;
});
