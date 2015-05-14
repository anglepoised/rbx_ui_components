define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.ngModel = [
            {label: 'Default label'},
            {label: 'Invalid label'},
            {label: 'Disabled label', disabled: true},
            {label: 'Required label', required: true},
            {label: 'Checked label', checked: true}
        ];
    }

    return demoCtrl;
});
