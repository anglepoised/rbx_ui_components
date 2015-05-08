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
            }
        ];

        this.dataRow = [];
        for (var i = 0; i < 6; i++) {
            this.dataRow.push({
                label: 'Radio label ' + (i + 1)
            });
        }
    }

    return demoCtrl;
});
