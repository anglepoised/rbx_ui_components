define([
    'ui-components/rb-loading'
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

        describe('hidden text', function () {
            it('should show the message', function () {
                template = '<rb-loading item-label="Teams"></rb-loading>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).toContain('Loading');
            });

            it('should not show the message', function () {
                template = '<rb-loading item-label="Teams" hide-text="true"></rb-loading>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).not.toContain('Loading');
            });
        });

        describe('size modifier', function () {
            it('should set no modifier', function () {
                template = '<rb-loading item-label="Teams" size=""></rb-loading>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).hasClass('Loading--large')).toBeFalsy();
            });

            it('should set it to large', function () {
                template = '<rb-loading item-label="Teams" size="large"></rb-loading>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).hasClass('Loading--large')).toBeTruthy();
            });
        });
    });
});
