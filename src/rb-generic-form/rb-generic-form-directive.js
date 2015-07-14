define([
    'html!./rb-generic-form.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbGenericForm
     * @module rb-generic-form
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-generic-form>
     *     </rb-generic-form>
     * </hljs>
     *
     * @ngInject
     */
    function rbGenericFormDirective () {

        return {
            scope: {
                'hasRequiredFields':'@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbGenericFormDirective;
});
