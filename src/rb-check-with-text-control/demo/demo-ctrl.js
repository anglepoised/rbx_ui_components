define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.models = {
            empty: {},
            prepopulated: {
                'SSP': 'google_adx',
                'deal_ids': '123, abc'
            }
        };

        this.invalidateCheckbox = function () {
            this.myForm['validation_ssp'].$error.server = 'This stuff is bad!';
        };

        this.invalidateText = function () {
            this.myForm['validation_deal_ids'].$error.server = 'This stuff is bad!';
        };

    }

    return demoCtrl;
});
