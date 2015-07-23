define([
    'ui-components/rb-demo-block'
], function (rbDemoBlock) {
    describe('rb-demo-block', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbDemoBlock.name));

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

        describe('rendering', function () {
            it('should render root element with class', function () {
                compileTemplate('<rb-demo-block></rb-demo-block>');

                expect(element.hasClass('DemoBlock')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-demo-block>Some content</rb-demo-block>');

                expect(element.html()).toContain('Some content');
            });
        });

    });
});
