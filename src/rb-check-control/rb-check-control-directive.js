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
     * `<rb-check-control/>` Is a directive for creating multiple checkboxes with
     * an optional select all title.
     *
     * @usage
     * <hljs lang="html">
     *    <form name="form">
     *        <rb-check-control
     *            form="form"
     *            is-disabled="false"
     *            is-required="false"
     *            name="name"
     *            ng-model="ngModel"
     *            select-all="false"
     *            title="Your Title">
     *        </rb-check-control>
     *    </form>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckControlDirective () {

        return {
            scope: {
                form: '=',
                isDisabled: '@',
                isRequired: '@',
                name: '@',
                ngModel: '=',
                selectAll: '@',
                title: '@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbCheckControlDirective;
});
