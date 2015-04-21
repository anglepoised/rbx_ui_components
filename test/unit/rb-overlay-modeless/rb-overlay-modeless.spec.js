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

        it('should do something', function () {
        });

    });
});
