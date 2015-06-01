define([
    'components/rb-currency-display/rb-currency-display-link'
], function (rbCurrencyDisplayLink) {

    describe('The link function for the rb-currency-display directive', function () {
        var scope,
            attributes,
            watcher = function (item, callback) {
                callback(scope[item]);
            };

        beforeEach(function () {
            scope = {};
            attributes = {};
        });

        it('should split the full amount with decimal and round', function () {
            scope = {
                amount: '99999.99',
                $watch: watcher
            };

            attributes = {
                decimalPlaces: 1
            };

            rbCurrencyDisplayLink(scope, {}, attributes);

            expect(scope.integerPart).toBe('100000');
            expect(scope.fractionalPart).toBe('0');
        });

        it('should split the full amount and set decimal as zero when there isn\'t one', function () {
            scope = {
                amount: '1219182',
                $watch: watcher
            };

            rbCurrencyDisplayLink(scope, {}, attributes);

            expect(scope.integerPart).toBe('1219182');
            expect(scope.fractionalPart).toBe('00');
        });
    });
});
