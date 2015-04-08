define([
    'components/rb-currency/rb-currency-link'
], function (rbCurrencyLink) {

    describe('The link function for the rb-currency directive', function () {
        var scope;

        beforeEach(function () {
            scope = {};
        });

        it('should split the full amount with decimal', function () {
            scope = {
                fullAmount: '99999.99'
            };

            rbCurrencyLink(scope);

            expect(scope.amount).toBe('99999');
            expect(scope.decimal).toBe('99');
        });

        it('should split the full amount and set decimal as zero when there isn\'t one', function () {
            scope = {
                fullAmount: '1219182'
            };

            rbCurrencyLink(scope);

            expect(scope.amount).toBe('1219182');
        });
    });
});
