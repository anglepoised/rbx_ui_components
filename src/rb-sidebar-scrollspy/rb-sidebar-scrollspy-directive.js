define([
    'html!./rb-sidebar-scrollspy.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSidebarScrollspy
     * @module rb-sidebar-scrollspy
     *
     * @restrict E
     *
     * @description
     * `<rb-sidebar-scrollspy>` is a directive that renders a scrollable spied
     * sidebar - Currently only supports static target lists.
     *
     * @scope
     *  'list': an array containing item objects to be rendered in the sidebar.
     *          Item objects should be defined as follows:
     *          {
     *              label: 'Text to be displayed in the sidebar'
     *              anchor: 'HTML anchor name. This anchor represents the target
     *                       selector and is expected to match an id in another list.
     *                       If no present or empty the item will not target any id.'
     *              category: 'If `true` the item label should be displayed and
     *                        styled as a category'.
     *          }
     *  'offset': Pixels to offset from top of screen when calculating position of
     *            scroll. Defaults to '0'.
     *
     * @usage
     * <hljs lang="html">
     *    <rb-sidebar-scrollspy list="ctrl.list" offset="100"></rb-sidebar-scrollspy>
     * </hljs>
     *
     * @ngInject
     */
    function rbSidebarScrollspyDirective ($compile) {

        return {
            scope: {
                categories: '=',
                offset: '@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }
    return rbSidebarScrollspyDirective;
});
