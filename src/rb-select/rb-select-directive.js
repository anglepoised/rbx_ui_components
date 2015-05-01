define([
    'html!./rb-select.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSelect
     * @module rb-select
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-select>
     *     </rb-select>
     * </hljs>
     *
     * @ngInject
     */
    function rbSelectDirective () {

        return {
            scope: {
                items: '=',
                selected: '=',
                value: '@',
                placeholder: '@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbSelectDirective;
});
