define([
], function () {

    // @ngInject
    function demoGroupCtrl ($rootScope, $state, $injector) {

        function getOptions () {
            return [
                {
                    label: 'Default label',
                    value: 'default_label'
                },
                {
                    label: 'Invalid label',
                    value: 'invalid_label'
                },
                {
                    label: 'Required label',
                    required: true,
                    value: 'required_label'
                },
                {
                    checked: true,
                    label: 'Checked label',
                    value: 'checked_label'
                }
            ];
        }

        this.defaultOptions = getOptions();
        this.selectAllOptions = getOptions();
    }

    return demoGroupCtrl;
});
