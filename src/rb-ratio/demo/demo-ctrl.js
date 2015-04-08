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
                denominator: 3000
            }
        ];
    }

    return demoCtrl;
});
