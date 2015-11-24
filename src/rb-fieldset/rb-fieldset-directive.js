define([
    './rb-fieldset.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbFieldset
     * @module rb-fieldset
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-fieldset>
     *     </rb-fieldset>
     * </hljs>
     *
     * @ngInject
     */
    function rbFieldsetDirective () {

        return {
            scope: {
                label: '@',
                type: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbFieldsetDirective;
});
