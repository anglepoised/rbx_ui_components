define([
    'components/rb-panel-scroll'
], function (rbPanelScroll) {
    describe('rb-panel-scroll', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbPanelScroll.name));

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

        describe('compiled template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-panel-scroll></rb-panel-scroll>');
                expect(element.hasClass('PanelScroll')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-scroll>My Content</rb-panel-scroll>');
                expect(element.html()).toContain('My Content');
            });
        });

        describe('compiled `rb-panel-scroll-bottom` template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-panel-scroll-bottom></rb-panel-scroll-bottom>');
                expect(element.hasClass('PanelScroll-bottom')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-scroll-bottom>My Content</rb-panel-scroll-bottom>');
                expect(element.html()).toContain('My Content');
            });
        });

        describe('compiled `rb-panel-scroll-scrollable` template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-panel-scroll-scrollable></rb-panel-scroll-scrollable>');
                expect(element.hasClass('PanelScroll-scrollable')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-scroll-scrollable>My Content</rb-panel-scroll-scrollable>');
                expect(element.html()).toContain('My Content');
            });
        });

        describe('compiled `rb-panel-scroll-unscrollable` template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-panel-scroll-unscrollable></rb-panel-scroll-unscrollable>');
                expect(element.hasClass('PanelScroll-unscrollable')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-scroll-unscrollable>My Content</rb-panel-scroll-unscrollable>');
                expect(element.html()).toContain('My Content');
            });
        });

        describe('compiled `rb-panel-scroll-top` template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-panel-scroll-top></rb-panel-scroll-top>');
                expect(element.hasClass('PanelScroll-top')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-scroll-top>My Content</rb-panel-scroll-top>');
                expect(element.html()).toContain('My Content');
            });
        });

    });
});
