define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector, $mdToast) {
        // this is md-toast demo ctrl

        this.showToast = function () {
            $mdToast.show({
                template: '<md-toast><span>Hello I am Toast !!!</span></md-toast>',
                hideDelay: 6000,
                position: 'top right'
            });
        };

        this.showToast();
    }

    return demoCtrl;
});
