define([
], function () {

    // @ngInject
    function pageHeaderDemoCtrl () {

        this.currentNavBarOption = 1;

        this.user = 'sirdigbychicken@caeser.com';

        this.logout = function () {
            console.log('logging out !!!');
        };

        this.logoHeaderFunction = function () {
            console.log('it works !!!');
        };

        this.options = [
            {'text': 'Campaigns', 'state': 'rb-badge', 'active': true},
            {'text': 'Reporting', 'url': 'http://google.com'},
            {'text': 'Creatives', 'state': false}
        ];

    }

    return pageHeaderDemoCtrl;
});
