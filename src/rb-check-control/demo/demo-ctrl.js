define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.data = {
            'default': [{label: 'Default label'}],
            'invalid': [{label: 'Invalid label'}],
            'disabled': [{label: 'Disabled label', disabled: true}],
            'required': [{label: 'Required label', required: true}],
            'checked': [{label: 'Checked label', checked: true}]
        };
    }

    return demoCtrl;
});
