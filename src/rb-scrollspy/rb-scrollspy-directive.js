define([
    'html!./rb-scrollspy.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbScrollspy
     * @module rb-scrollspy
     *
     * @restrict E
     *
     * @description
     * `<rb-scrollspy>` is a directive that renders a scrollable spied list.
     *
     * @scope
     *  'categories': an array containing item objects to be rendered in the scrollspy
     *                container.
     *          Item objects should be defined as follows:
     *          {
     *              label: 'Text for the category to be displayed in the scrollspy and
     *                      target list'
     *              anchor: 'HTML anchor name for the category. This anchor represents
     *                       the target selector in the scrollspy list and is expected
     *                       to match an id in the target list'
     *              hidden: 'If `true` the category label will not be displayed in the list'.
     *              sections: 'An array containing section objects to be rendered as
     *                         sub-categories of the parent category'
     *                    Section objects should be defined as follows:
     *                    {
     *                        label: 'Text for the section to be displayed in the list'
     *                        anchor: 'HTML anchor name for the section. This anchor
     *                                 represents the target selector in the scrollspy
     *                                 list and is expected to match an id in the target list'
     *                        items: 'An array containing the item objects to be displayed in
     *                                the target list'.
     *                    }
     *          }
     *  'offset': Pixels to offset from top of screen when calculating position of
     *            scroll. Defaults to '0'.
     *  'scroll-id': The element id to monitor for scroll changes.
     *
     * @usage
     * <hljs lang="html">
     *    <rb-scrollspy categories="ctrl.categories" offset="100"></rb-scrollspy>
     * </hljs>
     *
     * @ngInject
     */
    function rbScrollspyDirective ($compile) {

        return {
            scope: {
                categories: '=',
                offset: '@',
                scrollId: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }
    return rbScrollspyDirective;
});
