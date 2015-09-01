define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.choices = [
            {
                label: 'Radio label',
                value: 'radio_label'
            },
            {
                label: 'Radio invalid',
                value: 'radio_invalid'
            },
            {
                label: 'Radio disabled',
                value: 'radio_disabled',
                disabled: true
            },
            {
                label: 'Radio required',
                value: 'radio_required',
                required: true
            },
            {
                label: 'Radio checked',
                value: 'radio_checked'
            }
        ];

        this.domainTargetingChoices = [
            {
                label: 'Unrestricted',
                value: 'unrestricted',
                icon: 'unrestricted'
            },
            {
                label: 'White List Only',
                value: 'whitelist',
                icon: 'whitelist'
            },
            {
                label: 'Black List Only',
                value: 'blacklist',
                icon: 'blacklist'
            }
        ];

        this.visibilityChoices = [
            {
                label: 'Anywhere',
                value: 'anywhere',
                icon: 'anywhere'
            },
            {
                label: 'Above the fold',
                value: 'above',
                icon: 'above'
            },
            {
                label: 'Below the fold',
                value: 'below',
                icon: 'below'
            }
        ];

        this.selected = 'radio_checked';

        this.choicesRow = [];
        for (var i = 0; i < 6; i++) {
            this.choicesRow.push({
                label: 'Radio label ' + (i + 1),
                value: 'radio_label_' + (i + 1)
            });
        }

        this.selectedRow = '';

    }

    return demoCtrl;
});
