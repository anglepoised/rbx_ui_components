define([
], function () {

    // @ngInject
    function demoGroupCtrl () {

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
                    label: 'Checked label',
                    value: 'checked_label'
                }
            ];
        }

        this.ngModelDefault = ['checked_label'];
        this.ngModelSelectAll = ['checked_label'];
        this.ngModelShared = ['checked_label', 'checked_label2'];

        this.defaultOptions = getOptions();
        this.selectAllOptions = getOptions();
        this.sharedOptions = getOptions();
        this.moreOptions = [
            {
                label: 'Default label 2',
                value: 'default_label2'
            },
            {
                label: 'Invalid label2',
                value: 'invalid_label2'
            },
            {
                label: 'Required label2',
                required: true,
                value: 'required_label2'
            },
            {
                label: 'Checked label2',
                value: 'checked_label2'
            }
        ];
    }

    return demoGroupCtrl;
});
