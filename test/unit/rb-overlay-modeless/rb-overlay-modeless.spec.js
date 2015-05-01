define([
    'components/rb-overlay-modeless'
], function (rbOverlayModeless) {
    describe('rb-overlay-modeless', function () {

        var $scope,
            $compile,
            element;

        beforeEach(angular.mock.module(rbOverlayModeless.name));

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

        describe('attribute generation', function () {

            it('should convert attributes on a rb-overlay-modeless to attributes on the generated overlay',
                function () {
                    compileTemplate('<rb-overlay-modeless anyattr any-attr></rb-overlay-modeless>');

                    expect(element[0].hasAttribute('anyattr')).toBe(true);
                    expect(element[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                compileTemplate('<rb-overlay-modeless></rb-overlay-modeless>');

                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should render transcluded elements', function () {
                compileTemplate('<rb-overlay-modeless><span>Some transcluded element</span></rb-overlay-modeless>');

                var span = angular.element(element.find('span'));
                expect(span.text()).toEqual('Some transcluded element');
            });

        });
    });
});
