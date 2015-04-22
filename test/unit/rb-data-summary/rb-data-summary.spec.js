define([
    'components/rb-data-summary',
    'html!./rb-data-summary.tpl.html'
], function (rbDataSummary, template) {
    describe('rb-data-summary', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module('rb-data-summary'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            rbDataSummary = angular.element(template);
            element = $compile(rbDataSummary)($scope);
            $scope.$apply();
        }));

        it('should do something', function () {
        });

    });
});
