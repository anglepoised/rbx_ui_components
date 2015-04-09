define([
    'components/rb-loading'
], function (rbLoading) {
    describe('rb-loading', function () {

        var $scope,
            $compile,
            template = '',
            ele;

        beforeEach(angular.mock.module('rb-loading'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        it('should display that something is loading', function () {
            template = '<rb-loading></rb-loading>';
            ele = $compile(template)($scope);

            $scope.$apply();

            expect(angular.element(ele).text()).toContain('Loading');
        });

        it('should display what is loading', function () {
            template = '<rb-loading item-label="Teams"></rb-loading>';
            ele = $compile(template)($scope);

            $scope.$apply();

            expect(angular.element(ele).text()).toContain('Loading Teams');
        });
    });
});
