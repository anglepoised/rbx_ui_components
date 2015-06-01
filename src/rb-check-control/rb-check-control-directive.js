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
     *            icon="blue-base-16-geo"
     *            is-disabled="false"
     *            is-required="false"
     *            label="Label"
     *            name="name"
     *            ng-model="ngModel"
     *            value="value">
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
                icon: '@',
                isDisabled: '@',
                isRequired: '@',
                label: '@',
                name: '@',
                ngModel: '=',
                value:'@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbCheckControlDirective;
});
