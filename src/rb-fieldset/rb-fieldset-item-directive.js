define([
    './rb-fieldset-item.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbFieldsetItem
     * @module rb-fieldset-item
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-fieldset-item>
     *     </rb-fieldset-item>
     * </hljs>
     *
     * @ngInject
     */
    function rbFieldsetItemDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbFieldsetItemDirective;
});
