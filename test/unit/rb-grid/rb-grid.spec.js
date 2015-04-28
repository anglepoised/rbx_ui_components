define([
    'components/rb-grid',
    'html!./rb-grid.tpl.html'
], function (rbGrid, template) {
    describe('rb-grid', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module('rb-grid'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            rbGrid = angular.element(template);
            element = $compile(rbGrid)($scope);
            $scope.$apply();
        }));

        it('should do something', function () {
        });

    });
});
