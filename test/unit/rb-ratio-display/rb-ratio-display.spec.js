define([
    'ui-components/rb-ratio-display'
], function (rbRatioDisplay) {
    describe('rb-ratio-display', function () {

        var ele,
            $scope,
            $compile,
            template = '';

        beforeEach(angular.mock.module('rb-ratio-display'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            ele = null;
        }));

        describe('percentage', function () {
            it('should render a percentage', function () {
                template = '<rb-ratio-display numerator="50" denominator="50"></rb-ratio-display>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).toContain('%');
            });

            it('should render the percentage of a numerator and denominator', function () {
                template = '<rb-ratio-display numerator="25" denominator="50"></rb-ratio-display>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).toContain('50%');
            });

            it('should round to zero decimal places', function () {
                template = '<rb-ratio-display numerator="2500" denominator="3000"></rb-ratio-display>';
                ele = $compile(template)($scope);

                $scope.$apply();

                // Should be 83% not 83.33333% (recurring)
                expect(angular.element(ele).text()).toContain('83%');
            });

            it('should be NaN when denominator is 0', function () {
                template = '<rb-ratio-display numerator="0" denominator="0"></rb-ratio-display>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).toContain('n/a');
            });

            it('should render as n/a when denominator is null', function () {
                template = '<rb-ratio-display numerator="50" denominator="{{null}}"></rb-ratio-display>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).toContain('n/a');
            });
        });

        describe('fraction', function () {
            it('should render a fraction', function () {
                template = '<rb-ratio-display numerator="50" denominator="100" ratio-type="fraction">' +
                    '</rb-ratio-display>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).toContain('50');
                expect(angular.element(ele).text()).toContain('100');
            });

            it('should render two currency components', function () {
                template = '<rb-ratio-display numerator="50" denominator="100" ratio-type="fraction"' +
                    ' display-type="currency"></rb-ratio-display>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).find('data').length).toBe(2);
            });

            it('should render as n/a when denominator is null', function () {
                template = '<rb-ratio-display numerator="50" denominator="{{null}}" ratio-type="fraction">' +
                    '</rb-ratio-display>';
                ele = $compile(template)($scope);

                $scope.$apply();

                expect(angular.element(ele).text()).toContain('n/a');
            });

        });
    });
});
