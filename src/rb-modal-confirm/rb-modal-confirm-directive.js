define([
    'html!./rb-modal-confirm.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbModalConfirm
     * @module rb-modal-confirm
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-modal-confirm>
     *     </rb-modal-confirm>
     * </hljs>
     *
     * @ngInject
     */
    function rbModalConfirmDirective () {

        return {
            scope: {
                title: '@',
                onConfirm: '&',
                onCancel: '&',
                cancelLabel: '@',
                confirmLabel: '@',
                confirmState: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbModalConfirmDirective;
});
