define([
    'components/rb-panel-content'
], function (rbPanelContent) {
    describe('rb-panel-content', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbPanelContent.name));

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
                compileTemplate('<rb-panel-content></rb-panel-content>');
                expect(element.hasClass('PanelContent')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-content>My Content</rb-panel-content>');
                expect(element.html()).toContain('My Content');
            });
        });

        describe('compiled `rb-panel-content-bottom` template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-panel-content-bottom></rb-panel-content-bottom>');
                expect(element.hasClass('PanelContent-bottom')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-content-bottom>My Content</rb-panel-content-bottom>');
                expect(element.html()).toContain('My Content');
            });
        });

        describe('compiled `rb-panel-content-scrollable` template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-panel-content-scrollable></rb-panel-content-scrollable>');
                expect(element.hasClass('PanelContent-scrollable')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-content-scrollable>My Content</rb-panel-content-scrollable>');
                expect(element.html()).toContain('My Content');
            });
        });

        describe('compiled `rb-panel-content-unscrollable` template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-panel-content-unscrollable></rb-panel-content-unscrollable>');
                expect(element.hasClass('PanelContent-unscrollable')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-content-unscrollable>My Content</rb-panel-content-unscrollable>');
                expect(element.html()).toContain('My Content');
            });
        });

        describe('compiled `rb-panel-content-top` template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-panel-content-top></rb-panel-content-top>');
                expect(element.hasClass('PanelContent-top')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-panel-content-top>My Content</rb-panel-content-top>');
                expect(element.html()).toContain('My Content');
            });
        });

    });
});
