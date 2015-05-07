define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {

        this.data = {
            'basic': '2015-04-27T11:29:05.474Z',
            'required': '',
            'help': '',
            'placeholder': ''
        };

    }

    return demoCtrl;
});
