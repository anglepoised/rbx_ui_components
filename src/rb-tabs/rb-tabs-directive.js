define([
    'html!./rb-tabs.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbTabs
     * @module rb-tabs
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-tabs>
     *     </rb-tabs>
     * </hljs>
     *
     * @ngInject
     */
    function rbTabsDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbTabsDirective;
});
