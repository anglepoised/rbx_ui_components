define([
    'html!./rb-select-control.tpl.html'
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
            link: link
        };

        function link (scope, elem, attr) {

            // Defaults to default size when no size is supplied
            if (angular.isDefined(attr.size)) {
                elem.addClass('SelectControl--' + attr.size);
            }
        }
    }

    return rbSelectControlDirective;
});
