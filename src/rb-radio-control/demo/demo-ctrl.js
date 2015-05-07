define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.data = [
            {
                label: 'Radio label'
            },
            {
                label: 'Radio invalid'
            },
            {
                label: 'Radio disabled',
                disabled: true
            },
            {
                label: 'Radio required',
                required: true
            },
            {
                label: 'Radio checked',
                checked: true
            },
            {
                label: 'Radio pressed',
                pressed: true
            },
            {
                label: 'Radio focused',
                focused: true
            }
        ];

        this.dataRow = [];
        for (var i = 0; i < 6; i++) {
            this.dataRow.push({
                label: 'Radio label ' + (i + 1)
            });
        }

        this.helpMessage = 'Optional group help message';
    }

    return demoCtrl;
});
