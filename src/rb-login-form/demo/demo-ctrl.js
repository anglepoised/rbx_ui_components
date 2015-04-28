define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.email = '';
        this.password = '';
        this.login = function () {
            console.log('LOGIN !!! ' + this.email + ' ' + this.password);
        };
        this.message = 'Couldn\'t log you in. Sorry.';
    }

    return demoCtrl;
});
