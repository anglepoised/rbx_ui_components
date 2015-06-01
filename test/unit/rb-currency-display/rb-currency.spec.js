define([
    'components/rb-currency-display'
], function (rbCurrencyDisplay) {
    describe('rb-currency-display', function () {

        var $scope,
            $compile,
            template = '';

        beforeEach(angular.mock.module('rb-currency-display'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        it('should render the currency in dollars', function () {
            $scope.amount = '9999.99';

            var currency = angular.element('<rb-currency-display amount="{{ amount }}"></rb-currency-display>'),
                element = $compile(currency)($scope),
                ele,
                text;

            $scope.$apply();

            ele = angular.element(element);
            text = ele.text();

            expect(text).toContain('$9');
        });

        it('should render with comma\'s', function () {
            $scope.amount = '9999.99';

            var currency = angular.element('<rb-currency-display amount="{{ amount }}"></rb-currency-display>'),
                element = $compile(currency)($scope),
                ele,
                text;

            $scope.$apply();

            ele = angular.element(element);
            text = ele.text();

            expect(text).toContain('$9,999');
        });

        it('should render with with decimal place seperated', function () {
            $scope.amount = '9999.99';

            var currency = angular.element('<rb-currency-display amount="{{ amount }}"></rb-currency-display>'),
                element = $compile(currency)($scope),
                ele,
                text;

            $scope.$apply();

            ele = angular.element(element);
            text = ele.text();

            expect(ele[0].children.length).toBe(2);
            expect(ele[0].children[0].innerHTML).toContain('9,999');
            expect(ele[0].children[1].innerHTML).toContain('.99');
        });
    });
});
