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
                isRequired: '@',
                name: '@',
                form: '='
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbSelectControlDirective;
});
