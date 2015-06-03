define([
    'html!./rb-check-control-group.tpl.html',
    './rb-check-control-group-link'
], function (template, linkFunc) {

    /**
     * @ngdoc directive
     * @name rbCheckControlGroup
     * @module rb-check-control-group
     *
     * @restrict E
     *
     * @description
     * `<rb-check-control-group/>` Is a directive for creating multiple checkboxes with
     * an optional select all title.
     *
     * @usage
     * <hljs lang="html">
     *    <form name="form">
     *        <rb-check-control-group
     *            enable-select-all="false"
     *            form="form"
     *            is-disabled="false"
     *            is-required="false"
     *            name="name"
     *            ng-model="ngModel"
     *            options="options"
     *            title="Your Title">
     *        </rb-check-control-group>
     *    </form>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckControlGroupDirective (filterFilter) {

        return {
            scope: {
                enableSelectAll: '@',
                form: '=',
                isDisabled: '@',
                isRequired: '@',
                name: '@',
                ngModel: '=',
                options: '=',
                title: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: linkFunc
        };
    }

    return rbCheckControlGroupDirective;
});
