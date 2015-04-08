define([
    'components/rb-ratio'
], function (rbRatio) {
    describe('rb-ratio', function () {

        var $scope,
            $compile,
            template = '';

        beforeEach(angular.mock.module('rb-ratio'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        describe('percentage', function () {
            it('should render a percentage', function () {
                var ele;
                template = '<rb-ratio numerator="50" denominator="50"></rb-ratio>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).toContain('%');
            });

            it('should render the percentage of a numerator and denominator', function () {
                var ele;
                template = '<rb-ratio numerator="25" denominator="50"></rb-ratio>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).toBe('50%');
            });

            it('should round to zero decimal places', function () {
                var ele;
                template = '<rb-ratio numerator="2500" denominator="3000"></rb-ratio>';
                ele = $compile(template)($scope);

                $scope.$apply();

                // Should be 83% not 83.33333% (recurring)
                expect(angular.element(ele).text()).toBe('83%');
            });
        });
    });
});
