define([
    'html!./rb-check-control-group.tpl.html'
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
     *            icon="blue-base-16-geo"
     *            name="name"
     *            ng-model="ngModel"
     *            enable-select-all="false"
     *            title="Your Title">
     *        </rb-check-control>
     *    </form>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckControlGroupDirective (filterFilter) {

        return {
            scope: {
                options: '=',
                form: '=',
                isDisabled: '@',
                isRequired: '@',
                icon: '@',
                name: '@',
                ngModel: '=',
                enableSelectAll: '@',
                title: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function ($scope, $element, $attributes) {

                $scope.$watch('options|filter:{checked:true}', function (newValue) {
                    $scope.ngModel = newValue.map(function (value) {
                        return value.value;
                    });
                }, true);

            }
        };
    }

    return rbCheckControlGroupDirective;
});
