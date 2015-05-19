define([
], function () {

    // @ngInject
    function demoGroupCtrl ($rootScope, $state, $injector) {
        this.defaultOptions = [
            {label: 'Default label'},
            {label: 'Invalid label'},
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

    return demoGroupCtrl;
});
