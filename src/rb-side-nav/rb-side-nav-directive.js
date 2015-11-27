define([
    './rb-side-nav.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSideNav
     * @module rb-side-nav
     *
     * @restrict E
     *
     * @description
     * `<rb-side-nav>` Is a directive for creating a side nav. Use it with `<rb-side-nav-item>`.
     *
     * Attributes:
     * - title attibute will set a title at the top of the naviation.
     * - on-save and on-cancel attributes will set the handlers for clicks on save and cancel buttons respectively.
     * - save-label allows the changing of the save button text. Defaults to 'Save'.
     * - action-help-text allows the setting of text above actions.
     *
     * @usage
     * <hljs lang="html">
     *    <rb-side-nav
     *        title="Menu title"
     *        on-save="onSave()"
     *        on-cancel="onCancel"
     *        save-label="Save & Republish"
     *        save-button-disabled="true"
     *        acetion-help-text="Be careful saving!">
     *     </rb-side-nav>
     * </hljs>
     *
     * @ngInject
     */
    function rbSideNavDirective () {

        return {
            scope: {
                title: '@',
                saveLabel: '@',
                actionHelpText: '@',
                onSave: '&',
                onCancel: '&',
                saveButtonDisabled: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbSideNavDirective;
});
