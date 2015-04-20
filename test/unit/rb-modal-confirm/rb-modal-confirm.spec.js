define([
    'components/rb-modal-confirm',
    'html!./rb-modal-confirm.tpl.html'
], function (rbModalConfirm, template) {
    describe('rb-modal-confirm', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module('rb-modal-confirm'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            rbModalConfirm = angular.element(template);
            element = $compile(rbModalConfirm)($scope);
            $scope.$apply();
        }));

        it('should do something', function () {
        });

    });
});
