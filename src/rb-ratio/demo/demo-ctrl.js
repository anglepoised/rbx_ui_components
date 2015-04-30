define([
], function () {

    // @ngInject
    function demoCtrl () {
        this.ratios = [
            {
                numerator: 250,
                denominator: 500
            },
            {
                numerator: 2500,
                denominator: 3000,
                ratioType: 'fraction'
            },
            {
                numerator: 2521.35,
                denominator: 3000,
                ratioType: 'fraction',
                displayType: 'currency'
            },
            {
                numerator: 2591.59,
                denominator: 3000,
                ratioType: 'fraction',
                displayType: 'currency',
                decimalPlaces: 0
            },
            {
                numerator: 2598.23,
                denominator: null,
                ratioType: 'fraction'
            },
            {
                numerator: 112230.00,
                denominator: null,
                ratioType: 'percentage'
            }
        ];
    }

    return demoCtrl;
});
