define([
    'html!./rb-nav-bar.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbNavBar
     * @module rb-nav-bar
     *
     * @restrict E
     *
     * @description
     * `<rb-nav-bar>` is a directive that shows a navigation bar
     *
     * @scope
     *  'options': an array containing option objects to be placed in the navigation bar.
     *           Option objects should be defined as follows:
     *           {id: '<an identifier for the option>',
     *           text: 'Text to be displayed'}
     *  'clickfunction': a custom function to be executed on every option when clicked
     *                   The function receives the 'id' from the option object as param
     *  'isactivefunction': a custom function that returns if an option should be displayed
     *                   with an `is-active` class.
     *                   The function receives the 'id' from the option object as param
     *
     * @usage
     * <hljs lang="html">
     *    <div class="Header-nav">
     *        <rb-nav-bar options="ctrl.options"></rb-nav-bar>
     *    </div>
     * </hljs>
     *
     * @ngInject
     */
    function rbNavBarDirective () {

        return {
            scope: {
                'options': '='
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbNavBarDirective;
});
