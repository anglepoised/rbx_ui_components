define([
    './rb-tabset.tpl.html'
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

        return /*@ngInject*/ {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {},
            template: template,
            bindToController: true,
            controllerAs: 'tabset',
            controller: function ($scope) {
                var $this = this;
                $this.tabs = [];
                $this.addTab = function addTab (tab) {
                    $this.tabs.push(tab);
                    if (angular.isUndefined(tab.isActive) && $this.tabs.length === 1) {
                        tab.active = true;
                    }
                };

                $this.select = function (selectedTab) {
                    angular.forEach($this.tabs, function (tab) {
                        if (tab.active && tab !== selectedTab) {
                            tab.active = false;
                        }
                    });
                    // Everytime a tab change is succesful, an event is
                    // broadcasted with the current tab object, following
                    // a sort of the same philosophy of the ui-router
                    $scope.$broadcast('$tabChangeSuccess', selectedTab);

                    selectedTab.active = true;
                };
            }
        };
    }

    return rbTabsetDirective;
});
