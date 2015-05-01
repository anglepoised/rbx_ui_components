define([
    'components/rb-overlay-modal'
], function (rbOverlayModal) {
    describe('rb-overlay-modal', function () {

        var $scope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbOverlayModal.name));

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

            it('should convert attributes on a rb-overlay-modal to attributes on the generated overlay',
                function () {
                    compileTemplate('<rb-overlay-modal anyattr any-attr></rb-overlay-modal>');

                    expect(element[0].hasAttribute('anyattr')).toBe(true);
                    expect(element[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should set overlay classes', function () {
                compileTemplate('<rb-overlay-modal></rb-overlay-modal>');

                var innerDiv = element.find('div');
                expect(element[0].tagName.toLowerCase()).toEqual('div');
                expect(element.hasClass('OverlayModal')).toBe(true);
                expect(innerDiv.length).toBe(1);
                expect(innerDiv.hasClass('OverlayModal-inner')).toBe(true);
            });

            it('should render transcluded elements', function () {
                compileTemplate('<rb-overlay-modal><span>Some transcluded element</span></rb-overlay-modal>');

                var span = angular.element(element.find('span'));
                expect(span[0].innerHTML).toEqual('Some transcluded element');
            });

        });

    });
});
