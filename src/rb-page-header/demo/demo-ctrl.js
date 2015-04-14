define([
], function () {

    // @ngInject
    function pageHeaderDemoCtrl () {

        this.currentNavBarOption = 1;

        this.user = 'sirdigbychicken@caeser.com';

        this.goToOption = function (id) {
            this.currentNavBarOption = id;
        };

        this.logout = function () {
            console.log('logging out !!!');
        };

        this.isActive = function (id) {
            return this.currentNavBarOption === id;
        };

        this.logoHeaderFunction = function () {
            console.log('it works !!!');
        };

        this.options = [
            {'id': 1, 'text': 'Campaigns'},
            {'id': 2, 'text': 'Reporting'},
            {'id': 3, 'text': 'Creatives'}
        ];

    }

    return pageHeaderDemoCtrl;
});
