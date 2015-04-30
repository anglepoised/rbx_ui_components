define([
    'components/rb-overlay-modal',
    'html!./rb-overlay-modal.tpl.html'
], function (rbOverlayModal, template) {
    describe('rb-overlay-modal', function () {

        var $scope,
            $compile,
            $document,
            element;

        beforeEach(angular.mock.module('rb-overlay-modal'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            rbOverlayModal = angular.element(template);
            element = $compile(rbOverlayModal)($scope);
            $scope.$apply();
        }));

        describe('attribute generation', function () {

            it('should convert attributes on a rb-overlay-modal to attributes on the generated overlay',
                function () {
                    var overlay = $compile('<rb-overlay-modal anyattr any-attr></rb-overlay-modal>')($scope);

                    expect(overlay[0].hasAttribute('anyattr')).toBe(true);
                    expect(overlay[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "rb-overlay-modal" tagname', function () {
                var overlay = angular.element(template),
                    element = $compile(overlay)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('rb-overlay-modal');
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
