define([
    'html!./rb-select.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSelect
     * @module rb-select
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-select
     *    	items="[]"
     *    	selected="dataModel"
     *    	label="Select a car"
     *    	help-message="i.e. Your favourite type of car"
     *    	value="key"
     *    	placeholder="Car"
     *    >
     *    </rb-select>
     * </hljs>
     *
     * @ngInject
     */
    function rbSelectDirective () {

        return {
            scope: {
                items: '=',
                selected: '=',
                label: '@',
                helpMessage: '@',
                value: '@',
                placeholder: '@',
                isRequired: '@',
                name: '@',
                form: '='
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbSelectDirective;
});
