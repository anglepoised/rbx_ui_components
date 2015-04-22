define([
    'components/rb-overlay-modal',
    'html!./rb-overlay-modal.tpl.html'
], function (rbOverlayModal, template) {
    describe('rb-overlay-modal', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module('rb-overlay-modal'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            rbOverlayModal = angular.element(template);
            element = $compile(rbOverlayModal)($scope);
            $scope.$apply();
        }));

        it('should do something', function () {
        });

    });
});
