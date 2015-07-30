define([
    'html!./rb-tabset.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbTabset
     * @module rb-tabs
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-tabset>
     *     </rb-tabset>
     * </hljs>
     *
     * @ngInject
     */
    function rbTabsetDirective () {

        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {},
            template: template,
            bindToController: true,
            controllerAs: 'tabset',
            controller: function () {
                var $this = this;
                $this.tabs = [];
                $this.addTab = function addTab (tab) {
                    $this.tabs.push(tab);

                    if ($this.tabs.length === 1) {
                        tab.active = true;
                    }
                };

                $this.select = function (selectedTab) {
                    angular.forEach($this.tabs, function (tab) {
                        if (tab.active && tab !== selectedTab) {
                            tab.active = false;
                        }
                    });

                    selectedTab.active = true;
                };
            }
        };
    }

    return rbTabsetDirective;
});
