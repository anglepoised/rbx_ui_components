define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.default = [
            {label: 'Default label'},
            {label: 'Invalid label'},
            {label: 'Disabled label', disabled: true},
            {label: 'Required label', required: true},
            {label: 'Checked label', checked: true}
        ];
        this.selectAll = [
            {label: 'Default label'},
            {label: 'Invalid label'},
            {label: 'Required label', required: true},
            {label: 'Checked label', checked: true}
        ];
    }

    return demoCtrl;
});
