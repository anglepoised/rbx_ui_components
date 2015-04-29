define([
    'components/rb-overlay-modeless',
    'html!./rb-overlay-modeless.tpl.html'
], function (rbOverlayModeless, template) {
    describe('rb-overlay-modeless', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module('rb-overlay-modeless'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            rbOverlayModeless = angular.element(template);
            element = $compile(rbOverlayModeless)($scope);
            $scope.$apply();
        }));

        describe('attribute generation', function () {

            it('should convert attributes on a rb-overlay-modeless to attributes on the generated overlay',
                function () {
                    var overlay = $compile('<rb-overlay-modeless anyattr any-attr></rb-overlay-modeless>')($scope);

                    expect(overlay[0].hasAttribute('anyattr')).toBe(true);
                    expect(overlay[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                var overlay = angular.element(template),
                    element = $compile(overlay)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should render transcluded elements', function () {

                var overlay = angular.element(template),
                    element = $compile(overlay)($scope),
                    span = angular.element(element.find('span'));

                $scope.$apply();
                expect(span[0].innerHTML).toEqual('Some transcluded element');
            });

        });
    });
});
