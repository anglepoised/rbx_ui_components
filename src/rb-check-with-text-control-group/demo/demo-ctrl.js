define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.options = [
            {
                label: 'Google Gmail',
                value: 'google_gmail'
            },
            {
                label: 'Mac Mail',
                value: 'mac_mail'
            }
        ];

        this.myModel = {
            normal: {},
            prepopulated: [{
                'id': 'mac_mail',
                'description': 'I like native apps'
            }]
        };

        this.modifyExternalModel = function () {
            if (this.myModel.external.length > 0) {
                this.myModel.external[0].description = 'KAPOW!';
            }
        };
    }

    return demoCtrl;
});
