define([
    './rb-warning-messages.tpl.html'
], function (template) {
    /**
     * @ngdoc directive
     * @name rbWarningMessages
     * @module rb-warning-messages
     *
     * @restrict E
     *
     * @description
     * `<rb-warning-messages>` is a directive that shows a list of warning
     * messages with links to issues and dismiss options
     *
     * @scope
     *  'warnings': an array containing warnings objects to be listed.
     *  'onIssueClick': a custom function to be executed on every issue link when clicked
     *                  The function receives the 'warning' object
     *  'onDismiss': a custom function to be executed on every dismiss icon when clicked
     *               The function receives the 'warning id' as param
     *
     * @usage
     * <hljs lang="html">
     *   <rb-warning-messages warnings="ctrl.warningList"
     *      on-issue-click="ctrl.goToIssue(warning)"
     *      on-dismiss="ctrl.dismissWarning(id)">
     *   </rb-warning-messages>
     * </hljs>
     *
     * @ngInject
     */
    function rbWarningMessagesDirective () {

        return {
            scope: {
                'warnings': '=',
                'onIssueClick': '&',
                'onDismiss': '&'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbWarningMessagesDirective;

});
