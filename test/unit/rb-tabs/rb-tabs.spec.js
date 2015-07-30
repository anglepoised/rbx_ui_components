define([
    'ui-components/rb-tabs'
], function (rbTabs) {
    describe('rb-tabs', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbTabs.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('rb-tabset and rb-tab', function () {
            it('should display heading of the tab', function () {
                template = '<rb-tabset><rb-tab heading="hello"></rb-tab></rb-tabset>';
                ele = $compile(template)($scope);
                $scope.$apply();
                expect(angular.element(ele).text()).toContain('hello');
            });

            it('should display content of the tab on load', function () {
                template = '<rb-tabset><rb-tab heading="hello">tab content</rb-tab></rb-tabset>';
                ele = $compile(template)($scope);
                $scope.$apply();
                expect(angular.element(ele).text()).toContain('tab content');
            });

            it('addTab function should add a tab to tabs array', function () {
                template = '<rb-tabset><rb-tab heading="hello">tab content</rb-tab></rb-tabset>';
                ele = $compile(template)($scope);
                $scope.$apply();
                var ctrl = $scope.$$childTail.tabset,
                    tabs = ctrl.tabs,
                    addTab = ctrl.addTab;
                expect(tabs.length).toBe(1);
                addTab('a tab');
                expect(tabs.length).toBe(2);
                addTab('another tab');
                expect(tabs.length).toBe(3);
            });

            it('select function should make the selected tab active and other tabs inactive', function () {
                template = '<rb-tabset>' +
                                '<rb-tab heading="hello">tab content</rb-tab>' +
                                '<rb-tab heading="tab2">tab2 content</rb-tab>' +
                                '<rb-tab heading="tab3">tab3 content</rb-tab>' +
                            '</rb-tabset>';
                ele = $compile(template)($scope);
                $scope.$apply();
                var ctrl = $scope.$$childTail.tabset,
                    tabs = ctrl.tabs,
                    select = ctrl.select;
                select(tabs[0]);
                expect(tabs[0].active).toBe(true);
                expect(tabs[1].active).toBe(false);
                expect(tabs[2].active).toBe(false);
                select(tabs[2]);
                expect(tabs[0].active).toBe(false);
                expect(tabs[1].active).toBe(false);
                expect(tabs[2].active).toBe(true);
            });

        });

    });
});
