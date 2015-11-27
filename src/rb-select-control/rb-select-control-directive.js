define([
    './rb-select-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSelectControl
     * @module rb-select-control
     *
     * @restrict E
     *
     * @description
     * `<rb-select-control>` is a plain select control directive
     *
     * If you supply a `size` attribute with `small` value, it will become
     * a select control with smaller dimensions.
     *
     * @usage
     * <hljs lang="html">
     *    <rb-select-control
     *      items="[]"
     *      selected="dataModel"
     *      label="Select a car"
     *      help-message="i.e. Your favourite type of car"
     *      value="key"
     *      display="keyOfLabel"
     *      placeholder="Car"
     *    >
     *    </rb-select-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbSelectControlDirective () {

        return {
            scope: {
                items: '=',
                selected: '=',
                label: '@',
                helpMessage: '@',
                value: '@',
                display: '@',
                placeholder: '@',
                isDisabled: '@',
                isDynamicallyDisabled: '=?',
                isRequired: '@',
                name: '@',
                form: '=',
                onChange: '&'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: {
                pre: function (scope, iElement, iAttrs) {
                    // Defaults to default size when no size is supplied
                    if (angular.isDefined(iAttrs.size)) {
                        iElement.addClass('SelectControl--' + iAttrs.size);
                    }

                    if (angular.isDefined(iAttrs.placeholder)) {
                        // Append an optional placeholder element
                        iElement.find('select').append('<option value="">' + iAttrs.placeholder + '</option>');
                    } else if ((angular.isUndefined(scope.selected) || scope.selected === null) &&
                        (angular.isDefined(scope.items) && scope.items.length)) {
                        // Preselect the first item
                        scope.selected = scope.items[0].id;
                    }
                }
            }
        };
    }

    return rbSelectControlDirective;
});
